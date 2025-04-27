import React, { useContext } from 'react'
import { Link } from 'react-router-dom'



const ProductItem = ({id,image,name,price,currency,}) => {
  
  
  return (
    <div>
    <Link className=' cursor-pointer' to={`/product/${id}`}>
     <div className='overflow-hidden'>
        <img className='hover:scale-110 transition ease-in-out border rounded-md ' src={image[0]} alt=''/>
     </div>
     <h1 className='pt-3 sm:text-[15px] text-[13px] font-serif font-bold  '>{name}</h1>
     <p className='text-[15px] inline-flex items-center font-sans '>{price} {currency}</p>

    </Link>
  </div>
  )
}

export default ProductItem
