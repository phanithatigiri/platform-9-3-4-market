import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {

  const [active,setactive] = useState("")

  

  return (
    <div className='w-[18%] min-h-screen border-gray-300 border-r'>
        <div className='flex flex-col pl-[20%] pt-5 gap-3'>
        <NavLink onClick={()=>setactive("add")}  className={` flex items-center gap-2 border border-r-0  py-2 px-3 rounded-l ${active === "add" ? "bg-purple-400" : "border-gray-400 "}`} to='/add'>
            <img className='w-5' src={assets.add_icon}/>
            <p className='sm:block hidden'>Add Items</p>
        </NavLink>
        <NavLink onClick={()=>setactive("list")}  className={` flex items-center gap-2 border border-r-0  py-2 px-3 rounded-l ${active === "list" ? "bg-blue-400" : "border-gray-400 "}`} to='/list'>
            <img className='w-5' src={assets.order_icon}/>
            <p className='sm:block hidden'>List items</p>
        </NavLink>
        <NavLink onClick={()=>setactive("orders")}  className={` flex items-center gap-2 border border-r-0  py-2 px-3 rounded-l ${active === "orders" ? "bg-green-400" : "border-gray-400 "}`} to='/orders'>
            <img className='w-5' src={assets.order_icon}/>
            <p className='sm:block hidden'>Orders</p>
        </NavLink>
        </div>
        
    </div>
  )
}

export default Sidebar
