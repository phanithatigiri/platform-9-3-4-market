import React, { useContext, useEffect, useState }  from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Contex/ShopContex'
import { asset } from '../assets/books/asset'
import RelatedProduct from '../Components/RelatedProduct'


const MProduct = () => {
   const {productId} = useParams()
   
    const{products,currency,addTocart} =useContext(ShopContext)
    const [productdata,setproductdata]=useState(false);
    const [image,setimg]=useState('')
    const [Size,setSize]=useState('');
    const [visable,setvisable]=useState(false);
    const fetchproduct= async ()=>{
      products.map((item)=>{
        if(item._id === productId){
          setproductdata(item)
          setimg(item.image[0])
          return null;
        } 
      })
    }


    useEffect(()=>{
      fetchproduct()

    },[productId,products])
    
  return productdata ? (
    <div className='pt-4'>
    <div className='flex sm:flex-row gap-5 flex-col'>
       <div className='flex flex-1 flex-col-reverse gap-2 sm:flex-row '>
              <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-auto sm:justify-normal cursor-pointer  sm:w-[16.7%] gap-2 w-full'>
                {
                  productdata.image.map((item,index)=>{
                    return <img onClick={()=>setimg(item)} src={item} alt={productdata.name} key={index} className='w-[20%] sm:w-[200px] flex-shrink-0 rounded-md' />  
                  })
                }
                  
              </div>
              <div className='w-full'>
                   <img className='w-full sm:w-[500px] rounded-md' src={image}/>
              </div>
          </div>
          <div className='flex-1 '>
            <h1 className='font-serif font-bold'>
            {
                productdata.name
              }
            </h1>
            <p className='mt-1'>4.8 ✨✨✨✨✨</p>
            {
              productdata.author && (
                <p><span className='font-semibold'>by</span> {productdata.author} (Author)</p>
              )
            }
            <p className=' mt-6 mb-4 font-semibold'>{productdata.price} {currency}</p>
            {productdata.specialOffer && (
            <p className="text-sm text-green-600 mb-4 font-bold">
              {productdata.specialOffer}
            </p>
          )}

               { productdata.category.includes('jewellery') ? '':  <p className='font-semibold'>sizeOptions</p> }
             
              <div className='mt-2 flex gap-2 font-semibold'>
                {  
                  
                  productdata.sizeOptions.map((btn,index)=>(
                           
                           <button onClick={()=>setSize(btn)} className={`py-1 px-3 border ${btn===Size ? 'border-black':''} rounded-md `} key={index}>{btn}</button>
                  ))
                }
              </div>
                
                <button onClick={()=>addTocart(productdata._id,Size)} className='text-sm mt-7 border px-4 rounded-md bg-black font-sans text-white py-3 hover:bg-gray-900 mb-4'>ADD TO CART</button>
                {
                  productdata.powers && (
                    <div className="mb-4">
                       <p className="font-semibold">Powers </p>
                         <ul className="list-disc pl-5 mt-1">
                           {productdata.powers.split(",").map((power, index) => (
                              <li key={index}>{power.trim()}</li>
                                    ))}
                            </ul>
                       </div>
                               )
                                 } 

                <div onClick={()=>setvisable(!visable)}>
                <p className='font-semibold flex items-center gap-2'>Product Description 
                <img className={`h-[15px] sm:hidden cursor-pointer ${visable ? 'rotate-90':''}`} src={asset.arrow}/>
                </p>
                </div>
                <p className={`mt-2 mb-5 sm:block ${visable ? '':'hidden'} `}>{productdata.description}</p>
              </div>
              
    </div>
    <RelatedProduct subcategory={productdata.subcategory}/>
    </div>

  ) :<div className='opacity-0'></div>
}

export default MProduct
