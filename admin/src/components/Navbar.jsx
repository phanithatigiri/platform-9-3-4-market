import React from 'react'


const Navbar = ({settoken}) => {
  return (
    <div className='flex items-center justify-between px-[4%] py-2'>
        <div className=' py-4 '>
          
          <h1 className=' magic-text text-[22px]  md:text-3xl lg:text-4xl  text-transparent bg-gradient-to-r  from-red-500 via-blue-500 to-green-500  bg-clip-text '>MAGICAL CRAFTS</h1>
          
        
        <p className='font-serif  text-[13px] sm:text-[18px]'>Admin Panel</p>
        </div>
        
        <button onClick={()=>settoken('')} className='bg-purple-800 text-white rounded-full py-2 px-4 font-serif sm:text-sm text-xs '>Logout</button>
      
    </div>

  )
}

export default Navbar
