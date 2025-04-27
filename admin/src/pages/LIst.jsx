import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'


const LIst = ({token}) => {

  const [list,setlist]=useState([])


  const fetchingdata = async () =>{
    try {
      const response = await axios.get(backendUrl + '/api/product/list')

      if(response.data.success){

        setlist(response.data.product)

      }

      else{
        toast.error(response.data.msg)
      }
     
    } catch (error) {
         console.log(error)
         toast.error(error.msg)
    }
   

  }

  const removeproduct = async (id) =>{
      try {

        const response = await axios.post(backendUrl+'/api/product/remove' ,{id},{headers:{token}})
        if(response.data.success){
             toast.success(response.data.msg)
             await fetchingdata()
        }

        else{
          toast.error(response.data.msg)
        }
        
      } catch (error) {
          console.log(error)
          toast.error(error.msg)
      }
  }

  useEffect(()=>{
      fetchingdata()
  },[])

  return (
    <div className='flex flex-col gap-2 '>
       <div className=' py-1 px-2 grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center bg-red-500 text-sm text-white w-full'>
        <b>image</b>
        <b>Name</b>
        <b>category</b>
        <b>Price</b>
        <b>Remove</b>
       </div>
      
        {
           
           list.map((item,index)=>(
               <div key={index} className=' grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] border border-gray-400 items-center text-sm py-2 px-2'>
                  <img src={item.image[0]} className='w-12'/>
                  <p>{item.name}</p>
                  <p>{item.category}</p>
                  <p>{item.price} {item.currency}</p>
                  <p onClick={()=>removeproduct(item._id)} className=' cursor-pointer text-lg md:text-center text-right '>X</p>
                </div>
           ))

        }
          
       </div>
       
  
  )
}

export default LIst
