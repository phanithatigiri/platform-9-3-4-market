import React, { useContext, useState } from 'react';
import CartAmount1 from '../Components/CartAmount1';
import { asset } from '../assets/books/asset';
import { ShopContext } from '../Contex/ShopContex';
import axios from 'axios';
import { toast } from 'react-toastify';

const PlaceOrders = () => {
  const { navigate, getCartAmount, delivery_fee, backendurl, token, cartitems, setcartitems, products } = useContext(ShopContext);
  const [Method, setMethod] = useState('cod');
  const [formdata, setformdata] = useState({ name: '', MagicalDwelling: '', NearTown: '', DeliveryMethod: '' });

  const onchangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setformdata((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();

      if (!token) {
        toast.info('Please login to place your magical order 🧙‍♂️');
        setTimeout(() => navigate('/login'), 3000);
        return;
      }

      const orderItems = [];
      for (const items in cartitems) {
        for (const item in cartitems[items]) {
          if (cartitems[items][item] > 0) {
            const itemInfo = structuredClone(products.find((product) => product._id === items));
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartitems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }

      let orderData = { address: formdata, items: orderItems, amount: getCartAmount() + delivery_fee };

      switch (Method) {
        case 'cod':
          const response = await axios.post(backendurl + '/api/order/cash', orderData, { headers: { token } });
          if (response.data.success) {
            setcartitems({});
            navigate('/morders');
          } else {
            toast.error(response.message);
          }
          break;

        case 'razorpay':
          const responseRazorpay = await axios.post(backendurl + '/api/order/razorpay', orderData, { headers: { token } });
          if (responseRazorpay.data.success) {
            const order = responseRazorpay.data.order;
            const rzpButton = document.getElementById('rzp-button1');
            if (rzpButton) {
              rzpButton.setAttribute('data-key', import.meta.env.VITE_RAZORPAY_KEY_ID);
              rzpButton.setAttribute('data-amount', order.amount);
              rzpButton.setAttribute('data-currency', 'INR');
              rzpButton.setAttribute('data-order_id', order.id);
              rzpButton.setAttribute('data-name', 'Platform 9¾ Market');
              rzpButton.setAttribute('data-description', 'Transaction');
              rzpButton.setAttribute('data-prefill.name', 'Phani');
              rzpButton.setAttribute('data-prefill.email', 'MagicalCrafts@luminos.com');
              rzpButton.setAttribute('data-prefill.contact', '7731914640');
              rzpButton.setAttribute('data-theme.color', '#F37254');
              rzpButton.setAttribute('data-callback_url', `${backendurl}/api/order/verifyrazorpay`);
              rzpButton.click();
            } else {
              console.error('Rzp-button1 not found');
              toast.error('Payment failed to start');
            }
          } else {
            toast.error(responseRazorpay.data.message || 'Order failed');
          }
          break;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col sm:flex-row sm:justify-between items-center">
      <div className="flex flex-col gap-2 sm:max-w-[450px] w-full">
        <h1 className="sm:text-lg mt-10 font-serif mb-5 font-bold">SHIPPING DETAILS</h1>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">Wizard/Witch Name:</label>
          <input required onChange={onchangeHandler} name="name" value={formdata.name} className="w-full border py-1.5 px-2 border-gray-400" type="text" placeholder="Enter your name" />
          <label className="text-sm font-semibold">Your Magical Dwelling:</label>
          <input required onChange={onchangeHandler} name="MagicalDwelling" value={formdata.MagicalDwelling} className="w-full border py-1.5 px-2 border-gray-400" type="text" placeholder="E.g., 4 Privet Drive" />
          <label className="text-sm font-semibold">Nearest Town:</label>
          <input required onChange={onchangeHandler} name="NearTown" value={formdata.NearTown} className="w-full border py-1.5 px-2 border-gray-400" type="text" placeholder="E.g., Hogsmeade" />
          <label className="text-sm font-semibold">Delivery Method:</label>
          <select onChange={onchangeHandler} name="DeliveryMethod" value={formdata.DeliveryMethod} className="border max-w-40 border-gray-400 text-sm py-2 px-2">
            <option value="Owl Post">Owl Post</option>
            <option value="Phoenix Express">Phoenix Express</option>
            <option value="Floo Network">Floo Network</option>
          </select>
        </div>
      </div>
      <div className="w-full sm:w-[500px] mt-10 sm:p-4">
        <CartAmount1 />
        <div className="mt-8 font-bold text-sm">Payment Options:</div>
        <div className="flex gap-5 mt-2">
          <div className="flex items-center gap-2 border py-1 px-3 cursor-pointer rounded-lg border-gray-400" onClick={() => setMethod('razorpay')}>
            <p className={`rounded-full border border-gray-400 w-3.5 h-3.5 ${Method === 'razorpay' ? 'bg-green-600' : ''}`}></p>
            <img className="w-20" src={asset.razorpay_logo} />
          </div>
          <div className="flex items-center gap-2 border border-gray-400 py-1 px-4 cursor-pointer rounded-lg" onClick={() => setMethod('cod')}>
            <p className={`rounded-full border w-3.5 h-3.5 border-gray-400 ${Method === 'cod' ? 'bg-green-600' : ''}`}></p>
            <p className="sm:block text-sm">Owl Post Payment</p>
          </div>
        </div>
        <div className="text-center mt-4">
          <button type="submit" className="rounded-lg font-serif hover:scale-[1.04] active:scale-[0.98] transform transition-transform bg-orange-500 font-medium duration-300 text-white py-3 px-2 w-full">Cast Spell to Place Order</button>
          <button id="rzp-button1" style={{ display: 'none' }}></button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrders;