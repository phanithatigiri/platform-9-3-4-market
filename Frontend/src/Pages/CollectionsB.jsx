import React, { useContext, useEffect, useState } from 'react'
import { asset } from '../assets/books/asset'
import { ShopContext } from '../Contex/ShopContex'
import ProductItem from '../Components/ProductItem'


const CollectionsB = () => {
  
   const {products,showsearch,search,} = useContext(ShopContext)
  const [showfilter,setshowfilter]=useState(false)
  const [filterproducts,setfilterproducts]=useState([])
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
      let productCopy = products.filter((items)=>items.category.includes('books'))
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
    <div className='flex flex-col sm:flex-row gap-2 sm:gap-10  mt-4'>
       <div className='min-w-60'>
          {/* Filter options  */}
          <div className=' mt-1 ml-2 max-w-[15rem] '>
            <div  className=''onClick={()=>setshowfilter(!showfilter)}>
              <p className='mb-2 flex items-center gap-1 text-lg '>Filters
              <img className={`h-[15px]  sm:hidden cursor-pointer text-[13px] sm:text-[15px] gap-1 ${showfilter ? 'rotate-90':''}`} src={asset.arrow}/>
                </p>
                </div>
            <div className={`border border-gray-300 py-4 px-5 cursor-pointer flex flex-col font-light text-[13px] sm:text-[15px] gap-1 ${showfilter ? '': 'hidden'} sm:block  `}>
             <p className='flex gap-3 '>
               <input type='checkbox' value={'Spells'} onChange={tooglecategory}/> Spells
               </p>
            <p className='flex gap-3  '>
               <input type='checkbox' value={'Theory'} onChange={tooglecategory}/> Theory
            </p>
            <p className='flex gap-3 '>
               <input type='checkbox' value={'Herbology'} onChange={tooglecategory}/> Herbology
            </p>
            <p className='flex gap-3 '>
               <input type='checkbox' value={'Defense'} onChange={tooglecategory}/> Defense
            </p>
            <p className='flex gap-3 '>
               <input type='checkbox' value={'Magical-Creatures'} onChange={tooglecategory}/> Magical Creatures
            </p>
            <p className='flex gap-3 '>
               <input type='checkbox' value={'Potions'} onChange={tooglecategory}/> Potions
            </p>
            <p className='flex gap-3 '>
               <input type='checkbox' value={'Charms'} onChange={tooglecategory}/> Charms
            </p>
            <p className='flex gap-3 '>
               <input type='checkbox' value={'Enchantments'} onChange={tooglecategory}/> Enchantments
            </p>
            <p className='flex gap-3 '>
               <input type='checkbox' value={'Astronomy'} onChange={tooglecategory}/> Astronomy
            </p>
            <p className='flex gap-3 '>
               <input type='checkbox' value={'History'} onChange={tooglecategory}/> History
            </p>

            {/* product price  */}

            </div>
          </div>
       </div>
         
        {/* Right Side */}
        <div className='flex-1  '>
         <div className='flex justify-between mb-2'>
             <div className='flex items-center gap-2 '>
          <p className='font-serif text-sm'>BOOKS</p>
          <img className='w-6 ' src={asset.sb}/>
          </div>
            <select onChange={(e)=>setsortType(e.target.value)}  className='border-2 border-gray-200 text-sm px-2'>
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

export default CollectionsB
