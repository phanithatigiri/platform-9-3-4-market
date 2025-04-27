import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Contex/ShopContex'
import { asset } from '../assets/books/asset';
import CartAmount1 from '../Components/CartAmount1';
import { NavLink } from 'react-router-dom';


const MCart = () => {
    const {products,cartitems,updateQuantity} =useContext(ShopContext)
    const [cartData,setCartData]=useState([]);
    
    useEffect(()=>{

        if(products.length > 0 ){

          const tempData= [];
          for (const items in cartitems){
            for(const item in cartitems[items]){
              if(cartitems[items][item] > 0){
                  tempData.push({
                    _id:items,
                    size:item,
                    quantity:cartitems[items][item]
                  })
              }
            }
          }
          setCartData(tempData)

        }
            
    },[cartitems,products])

    return (
      <div className='pt-10'>
        {cartData.length > 0 ? (
          <>
            <div>
              <h1 className='mb-10 font-serif text-[20px] font-bold'>Shopping Cart </h1>
            </div>
            <div>
              {cartData.map((item, index) => {
                const productdata = products.find((product) => product._id === item._id);
                return (
                  <div key={index} className='py-4 flex sm:flex gap-2'>
                    <div className='flex items-start gap-2 flex-1'>
                      <img className='w-24' src={productdata.image[0]} />
                      <div>
                        <p className='mb-1 sm:text-lg text-[14px] '>{productdata.name}</p>
                        <p className='mb-2 text-sm sm:text-md'>Size: {item.size}</p>
                        <p className='text-sm mb-2 sm:hidden '>
                          {productdata.price} {productdata.currency}
                        </p>
                        <div className='flex items-center gap-5'>
                          <img onClick={() => updateQuantity(item._id, item.size, 0)} className='w-4 cursor-pointer' src={asset.bin_icon} />
                          <input
                            onChange={(e) =>
                              e.target.value === '' || e.target.value === 0
                                ? null
                                : updateQuantity(item._id, item.size, Number(e.target.value))
                            }
                            className='border px-2 max-w-20'
                            type='number'
                            min={1}
                            defaultValue={item.quantity}
                          />
                        </div>
                      </div>
                    </div>
                    <div className='text-right'>
                      <p className='hidden sm:block font-semibold '>
                        {productdata.price} {productdata.currency}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className='flex justify-end my-4'>
              <div className='w-full sm:w-[500px] sm:p-4'>
                <CartAmount1 />
                <div className='mt-3'>
                  <NavLink to='/place-order'>
                    <button className='w-full border py-2 px-5 bg-orange-500 text-white rounded-md font-medium transform transition-transform duration-100 hover:scale-[1.03] active:scale-[0.98]'>PLACE ORDER</button>
                  </NavLink>
                </div>
              </div>
            </div>
          </>
        ) : (
          // Show message when cart is empty
          <div className='flex flex-col items-center justify-center h-[60vh] text-center'>
            <img src={asset.cart3} alt='Empty Cart' className='w-40 mb-4' />
            <h2 className='text-lg font-semibold'>Your cart is empty!</h2>
            <p className='text-gray-500 mb-4'>Add some magical books and potions to your cart.</p>
            <NavLink to='/'>
              <button className='px-6 py-2 bg-black text-white rounded-md hover:bg-gray-900'>
                Continue Shopping
              </button>
            </NavLink>
          </div>
        )}
      </div>
    );
  }

export default MCart
