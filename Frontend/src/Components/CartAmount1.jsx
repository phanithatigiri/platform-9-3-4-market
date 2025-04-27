import React, { useContext } from 'react'
import { ShopContext } from '../Contex/ShopContex'

const CartAmount1 = () => {
    const {getCartAmount,delivery_fee} = useContext(ShopContext);
  return (
    <div className='w-full'>
        <h1 className=' font-serif font-bold mb-5'>Cart Amount</h1>
    <div className='flex flex-col gap-2 mt-2 text-sm'>
      <div className='flex justify-between'>
         <p>Sub Total</p>
         <p>{getCartAmount()} Gellons</p>
      </div>
        <hr/>
        <div className='flex justify-between'>
          <p>Shipping Fee</p>
          <p>{delivery_fee} Gellons</p>
        </div>
        <hr/>
        <div className='flex justify-between'>
          <b>Total</b>
          <b>{getCartAmount()===0 ? 0:getCartAmount()+Number(delivery_fee)} Gellons</b>
        </div>
    </div>
  </div>
  )
}

export default CartAmount1
