import React, { useContext } from 'react'
import { ShopContext } from '../Contex/ShopContex'
import { asset } from '../assets/books/asset'

const Searchbar = () => {
    const  {search,setSearch,showsearch,setshowsearch} =useContext(ShopContext)
  return showsearch ? (
    <div className='text-center'>
        <div className='inline-flex border  justify-center items-center rounded-full border-gray-400 px-5 py-2 my-5 mx-2  sm:w-1/2'>
        <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='search' className='flex-1 outline-none bg-inherit'/>
        <img className='w-4' src={asset.search1}/>
</div>
 <img onClick={()=>setshowsearch(false)} className='inline w-4 cursor-pointer ' src={asset.cross_icon}/>
</div>
    
  ):null
}

export default Searchbar
