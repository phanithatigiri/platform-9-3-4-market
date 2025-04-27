import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Contex/ShopContex'
import ProductItem from './ProductItem';
import Title from './Title';

const RelatedProduct = ({subcategory}) => {
    const {products}=useContext(ShopContext);
    const [relatedproduct,setrelatedproduct]=useState([]);
    

  useEffect(()=>{
       if(products.length > 0 ){
         let relateproduct = products
        relateproduct = relateproduct.filter((item)=>subcategory===item.subcategory)
        setrelatedproduct(relateproduct)
        
       }
  },[products])

  return (
    <div className='mt-10 sm:mt-20 text-center'>
        <Title text1={'Related'} text2={'Products'}/>
         <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-5'>
            {
                relatedproduct.map((item,index)=>(
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} currency={item.currency} />
                ))
            }
         </div>
    </div>
  )
}

export default RelatedProduct
