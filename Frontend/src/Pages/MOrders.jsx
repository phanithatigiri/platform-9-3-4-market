import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Contex/ShopContex'
import axios, { all } from 'axios'

const MOrders = () => {
  const {backendurl,token} = useContext(ShopContext)

  const [orders,setorders] = useState([])

  const loadorderdata =async()=>{

    try {

      if(!token){
        return null
      }
      
      const response = await axios.post(backendurl + '/api/order/userorders',{},{headers:{token}})
     if(response.data.success){
      let allOrderitems = []
        response.data.orders.map((order)=>{
          order.items.map((item)=>{
            item['status']= order.status
            item['payment']=order.payment
            item['paymentMethod']=order.paymentMethod
            item['date']=order.date
            allOrderitems.push(item)
          })
        })
        setorders(allOrderitems)
     }

    } 
    catch (error) {
      
    }

   

  }

  useEffect(()=>{
    loadorderdata()
},[token])


  return (
    
    <div>
       <h1 className=' mt-8 mb-5 font-serif font-semibold text-sm sm:text-lg'>Your Items </h1>
       <div>
          {
            orders.map((items,index)=>(
             <div key={index} className='py-4 flex md:flex-row flex-col md:justify-between md:items-center gap-2'>
                <div className='flex items-start gap-2 '>
                  <img className=' w-20 sm:w-20' src={items.image}/>
                  <div>
                  <p className=' text-sm sm:text-base '>{items.name}</p>
                  <div className='flex gap-2 text-sm mt-1'>
                    <p>{items.price} {items.currency}</p>
                    <p>quantity : {items.quantity}</p>
                    <p>size : {items.size}</p>
                    </div>
                    <p className='text-sm mt-2'>Date : <span className='text-gray-500'>{new Date(items.date).toDateString()}</span></p>
                    <p className='text-sm mt-2'>Payment : <span className='text-gray-500'>{items.paymentMethod}</span></p>
                  </div>
                   
                  </div>
                  <div className='flex items-center gap-2'>
                       <p className='min-w-1.5 h-1.5 rounded-full bg-green-500'></p>
                       <p className='text-sm '>Ready to Ship</p>
                      </div>
                      <div className=''>
                        <button onClick={loadorderdata} className='border text-sm border-gray-400 py-1 px-2 rounded-md'>Track Order</button>
                        </div>
              </div>
            ))
          }
       </div>
    </div>
  )
}

export default MOrders
