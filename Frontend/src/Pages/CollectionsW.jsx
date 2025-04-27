import React , {useContext, useEffect, useState} from 'react'
import { asset } from '../assets/books/asset'
import { ShopContext } from '../Contex/ShopContex'
import ProductItem from '../Components/ProductItem'

const CollectionsW = () => {
   const {products,showsearch,search} =useContext(ShopContext)
  const [showfilter,setshowfilter]=useState(false)
   const [filterproducts,setfilterproducts] = useState([])
    const [subcategory,setsubcategory] = useState([])
     const [sortType,setsortType]=useState('relavent')
     
   
     const tooglecategory = (e)=>{
            if(subcategory.includes(e.target.value)){
               setsubcategory(prev => prev.filter(item => item !== e.target.value))
            }
            else {
               setsubcategory(prev => [...prev,e.target.value])
            }
     }
   
   
      const applyfilter = ()=>{
         let productCopy = products.filter((items)=>items.category.includes("wands"))
         if(subcategory.length > 0 ){
            productCopy = productCopy.filter(item => subcategory.includes(item.subcategory))
         }
         if(showsearch && search ){
            productCopy = productCopy.filter(items => items.name.toLowerCase().includes(search.toLowerCase()))
         }
         setfilterproducts(productCopy)
      }
       
   
      const sortProduct = ()=>{
         let fcopy = filterproducts.slice()
         switch (sortType) {
            case 'low-high':
               setfilterproducts(fcopy.sort((a,b)=>(a.price - b.price)))
               break;
   
            case 'high-low':
               setfilterproducts(fcopy.sort((a,b)=>(b.price - a.price)))
               break;
               
            default :
             applyfilter()
             break;
         }
      }
   
     useEffect (()=>{
           applyfilter()
     },[subcategory,search,showsearch,products])
   
    useEffect(()=>{
       sortProduct()
    },[sortType])
     
      return (
        <div className='flex flex-col sm:flex-row gap-2 sm:gap-10 mt-4'>
           <div className='min-w-60'>     
              {/* Filter options  */}
              <div className=' mt-1 ml-2 max-w-[15rem] '>
                <div  className=''onClick={()=>setshowfilter(!showfilter)}>
                     <p className='mb-2 flex items-center gap-1 '>Filters
                       <img className={`h-[15px]  sm:hidden cursor-pointer ${showfilter ? 'rotate-90':''}`} src={asset.arrow}/>                        </p> 
                  </div>
                <div className={`border border-gray-300 py-4 px-5 cursor-pointer flex flex-col font-light text-[13px] sm:text-[15px] gap-1  ${showfilter ? '': 'hidden'} sm:block  `}>
                 <p className='flex gap-3 '>
                   <input type='checkbox' value={'Fire'} onChange={tooglecategory} /> Fire
                   </p>
                <p className='flex gap-3  '>
                   <input type='checkbox' value={'Ice'} onChange={tooglecategory}/> Ice
                </p>
                <p className='flex gap-3 '>
                   <input type='checkbox' value={'Nature'} onChange={tooglecategory} /> Nature
                </p>
                <p className='flex gap-3 '>
                   <input type='checkbox' value={'Shadow'} onChange={tooglecategory} /> Shadow
                </p>
                <p className='flex gap-3 '>
                   <input type='checkbox' value={'Healing'} onChange={tooglecategory}/> Healing
                </p>
                <p className='flex gap-3 '>
                   <input type='checkbox' value={'Lightning'} onChange={tooglecategory} /> Lightning
                </p>
                <p className='flex gap-3 '>
                   <input type='checkbox' value={'Destruction'} onChange={tooglecategory} /> Destruction
                </p>
                <p className='flex gap-3 '>
                   <input type='checkbox' value={'Telepathy'} onChange={tooglecategory} /> Telepathy
                </p>
                <p className='flex gap-3 '>
                   <input type='checkbox' value={'Cosmic'} onChange={tooglecategory} /> Cosmic
                </p>
                <p className='flex gap-3 '>
                   <input type='checkbox' value={'Battle'} onChange={tooglecategory} /> Battle
                </p>
                </div>
              </div>
           </div>
            {/* Right Side */}
        <div className='flex-1  '>
         <div className='flex justify-between mb-2'>
             <div className='flex items-center gap-2 '>
          <p className='font-serif text-sm'>WANDS</p>
          <img className='w-6 ' src={asset.mw}/>
          </div>
            <select onChange={(e)=>setsortType(e.target.value)}   className='border-2 border-gray-200 text-sm px-2'>
               <option value='relavent'>sort by Relavent</option>
               <option value='low-high'>low-high</option>
               <option value='high-low'>high-low</option>
            </select>
            </div>
        
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-4 gap-y-2 '>
               {
                 filterproducts.map((item,index)=>(
                  <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} currency={item.currency} />   
                 )) 
               }
             </div>
         </div>
        </div>
      )
}

export default CollectionsW
