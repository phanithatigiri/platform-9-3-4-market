import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App'
import {toast} from 'react-toastify'
import { assets } from '../assets/assets'

const Orders = ({token}) => {
  
  const [orders,setorders]=useState([])

  const fetchproducts = async ()=>{

    if(!token){
      return null
    }

    try {
       
      const response = await axios.post(backendUrl + '/api/order/list',{},{headers:{token}})
      if(response.data.success){
          setorders(response.data.orders)
          console.log(response.data)
         
      }

      else{
         toast.error(response.data.message)
      }
       
      
    } catch (error) {

      toast.error(error.message)
      
    }

  }

  const StatusUpdate = async(event,orderId)=>{
        try {

          const response = await axios.post(backendUrl + '/api/order/status' , {orderId,status:event.target.value},{headers:{token}})
          if(response.data.success){
            await fetchproducts()
          }
        } catch (error) {
           console.log(error)
            toast.error(error.message)
        }   
  }

  useEffect(()=>{
      fetchproducts()
  },[token])

  return (
<div>
  <h1 className='mb-2 text-xl'>All Orders</h1>
  <div>
    {orders.map((order, index) => (
      <div className='grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start' key={index}>
        <img className='mb-2' src={assets.parcel_icon} />
        <div>
          {order.items.map((item, index) => (
            <div className='mb-2 ' key={index}>
              <div>
              <p className=''>{item.name} X {item.quantity} <span>{item.size}</span>
              {index !== order.items.length - 1 &&" ,"}
              </p> 
               <p>Name: {order.address.name}</p>
               <p>MagicalDwelling : {order.address.MagicalDwelling + " , "+ order.address.NearTown}</p>
               
              </div>
              
               

               <div>

               <p>PaymentMethod : {order.paymentMethod}</p>
               <p>payment : {order.payment}</p>
               <p>Date : {new Date(order.date).toLocaleDateString()}</p>

                </div>

                <p className='mb-2'>{order.amount} Galleons </p>

                <select onChange={(event)=>StatusUpdate(event,order._id)} value={order.status} className='p-1'>
                   <option value="Order Placed">Order Placed</option>
                   <option value="Packing">Packing</option>
                   <option value="Shipped">Shipped</option>
                   <option value="Out for delivery">Out for delivery</option>
                   <option value="Delivered">Delivered</option>
                </select>
               
               
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>
  )
}

export default Orders
