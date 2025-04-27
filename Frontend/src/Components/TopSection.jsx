import React from 'react'
import { jasset } from '../assets/TopSection/Topasset'
import { Link } from 'react-router-dom'



const TopSection = () => {
  return (
    <div className='flex items-center justify-center gap-7 mt-3 '>
       {
           jasset.map((menu,index)=>(
             <div className=' sm:hidden w-10 flex flex-col items-center '>
                <Link to={`/${menu.link}`}> 
                <img key={index} src={menu.image} className='border rounded-full w-10'/>
                <p className={`magic-text tracking-widest font-medium text-gray-600 text-lg`}  >{menu.name}</p>
                </Link>
            
               </div>
           ))
       }
       
    </div>
  )
}

export default TopSection
