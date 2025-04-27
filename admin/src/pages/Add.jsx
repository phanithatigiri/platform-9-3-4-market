import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'
const Add = ({token}) => {


   const [image1,setimage1]=useState(null)
   const [image2,setimage2]=useState(null)
   const [image3,setimage3]=useState(null)
   const [image4,setimage4]=useState(null)

  const [name,setname] = useState('')
  const [category,setcategory] = useState('')
  const [dresssubcategory,setdresssubcategory]=useState('')
  const [bookssubcategory,setbookssubcategory]=useState('')
  const [wandssubcategory,setwandssubcategory]=useState('')
  const [jewellerysubcategory,setjewellerysubcategory]=useState('')
  const [author ,setauthor]=useState('')
  const [powers,setpowers]=useState('')

  const [price,setprice] = useState('')
  const [description,setdescription] = useState('')
 
   const [selectedsize,setselectedsize] = useState([])
  const [Bestseller,setBestseller] = useState(false)
  const [Specialoffer,setSpecialoffer]= useState('')
  const [Currency,setCurrency] = useState('Galleons')

   const handlesize = (size)=>{
    setselectedsize((presize)=>(
       presize.includes(size) ? presize.filter((s)=>s !==size) :
       [...presize,size]
     )
    )
   }


   const onSubmitHandler = async (e)=>{
      e.preventDefault()
      try {

         const formdata = new FormData()

         formdata.append("name",name)
         formdata.append("description",description)
         formdata.append("price",price)
         formdata.append("currency",Currency)
         formdata.append("bestseller",Bestseller)
         formdata.append("sizeOptions",JSON.stringify(selectedsize))
        formdata.append("category",category)
        formdata.append("specialOffer",Specialoffer)

        if(category === 'books'){
         formdata.append("subcategory",bookssubcategory)
         formdata.append("author",author)
         }

         else if(category==='wands'){
          formdata.append("subcategory",wandssubcategory)
          formdata.append("powers",powers)
         }

         else if (category==='jewellery'){
            formdata.append("subcategory",jewellerysubcategory)
            formdata.append("powers",powers)
         }

         else if (category === 'dress'){
            formdata.append("subcategory",dresssubcategory)
         }

        image1 && formdata.append("image1",image1)
        image2 && formdata.append("image2",image2)
        image3 && formdata.append("image3",image3)
        image4 && formdata.append("image4",image4)

         const response = await axios.post(backendUrl + '/api/product/add',formdata,{headers:{token}})
         if(response.data.success){
           toast.success(response.data.msg)
            setname('')
            setdescription('')
            setprice('')
            setBestseller(false)
            setSpecialoffer('')
            setselectedsize([])
            setimage1(false)
            setimage2(false)
            setimage3(false)
            setimage4(false)
            setpowers('')
         }

         else{
            toast.error(response.data.msg)
         }
         
      } catch (error) {
         console.log(error)
         toast.error(error.message)
      }
   }

   const handlecategorychange=(e)=>{
         setcategory(e.target.value)
            
         setdresssubcategory("")
         setbookssubcategory("")
         setwandssubcategory("")
         setjewellerysubcategory("")
         setpowers("")

   }

  return (
    <div>
        <form onSubmit={onSubmitHandler}>
            <h1 className='mb-2'>Upload area</h1>
            <div className='flex gap-3'>
               <label htmlFor='image1'>
                  <img className='w-20 cursor-pointer' src={!image1? assets.upload_area : URL.createObjectURL(image1)} />
                  <input onChange={(e)=>setimage1(e.target.files[0])}  className='' type='file' id='image1' hidden />
               </label>
               <label htmlFor='image2'>
               <img className='w-20 cursor-pointer' src={!image2? assets.upload_area : URL.createObjectURL(image2)} />
                  <input onChange={(e)=>setimage2(e.target.files[0])}  className='' type='file' id='image2' hidden />
               </label>
               <label htmlFor='image3'>
               <img className='w-20 cursor-pointer' src={!image3? assets.upload_area : URL.createObjectURL(image3)} />
                  <input onChange={(e)=>setimage3(e.target.files[0])}  className='' type='file' id='image3' hidden />
               </label>
               <label htmlFor='image4'>
               <img className='w-20 cursor-pointer' src={!image4? assets.upload_area : URL.createObjectURL(image4)} />
                  <input onChange={(e)=>setimage4(e.target.files[0])}  className='' type='file' id='image4' hidden />
               </label>
            </div>

            <div className='my-5  '>
              {/* product name */}
               <p className='mb-2'>Product name</p>
               <input type='text' onChange={(e)=>setname(e.target.value)} value={name} placeholder='type here' className=' border py-1 px-2 w-[350px]'/>
               
               {/* description */}

               <p className='my-2'>Product description</p>
              <textarea type='text' onChange={(e)=>setdescription(e.target.value)} value={description} placeholder='type here' className='border py-1 px-2 w-[350px] '/>

               {/* speicial offer */}

               <div className='mb-2'>
               <p className='mb-2'>Special Offer</p>
               <input onChange={(e)=>setSpecialoffer(e.target.value)} value={Specialoffer} className='w-[350px] py-1 px-2' type='text' placeholder='Type here' />
               </div>
              
              <div className='flex sm:flex-row flex-col gap-2 '>
              <div>
                <p className=' mb-2 '>Product category</p>

                {/* category  */}

                <select onChange={handlecategorychange} className='w-full py-1 px-2 border '>
                  <option value='dress'>dress</option>
                  <option value='books'>books</option>
                  <option value='jewellery'>jewellery</option>
                  <option value='wands'>Wands</option>
                </select>
               </div>


               {category ==='dress'&& 
                         <div>
                         <p className=' mb-2 '>dress subcategory</p>
         
                         <select onChange={(e)=>setdresssubcategory(e.target.value)} className='w-full py-1 px-2 border '>
                           <option value='Men'>Men</option>
                           <option value='Women'>Women</option>
                           <option value='Kids'>Kids</option>
                          
                         </select>
                        </div>
                 }
               

                  
                 
                 {category ==='books'&& 
                         <div>
                         <p className=' mb-2 '>books subcategory</p>
         
                         <select onChange={(e)=>setbookssubcategory(e.target.value)} className='w-full py-1 px-2 border '>
                           <option value='Spells'>Spells</option>
                           <option value='Theory'>Theory</option>
                           <option value='Herbology'>Herbology</option>
                           <option value='Magical Creatures'>Magical Creatures</option>
                           <option value='Potions'>Potions</option>
                           <option value='Charms'>Charms</option>
                           <option value='Enchanments'>Enchantments</option>
                           <option value='Astronomy'>Potions</option>
                           <option value='History'>History</option>
                           <option value='defense'>defense</option>
                         </select>
                        </div>
                 }
               
                    
                {category ==='wands'&&
                
                <div>
                <p className=' mb-2 '>wands subcategory</p>

                <select onChange={(e)=>setwandssubcategory(e.target.value)} className='w-full py-1 px-2 border '>
                  <option value='Fire'>Fire</option>
                  <option value='Ice'>Ice</option>
                  <option value='Nature'>Nature</option>
                  <option value='Shadow'>Shadow</option>
                  <option value='Healing'>Healing</option>
                  <option value='Lighning'>Lightning</option>
                  <option value='Destrution'>Destrution</option>
                  <option value='Telepathy'>Telepathy</option>
                  <option value='Cosmic'>Cosmic</option>
                  <option value='Battle'>Battle</option>
                </select>
               </div> 

            
               
               }
                 
                 

              
                
                {category ==='jewellery'&& <div>
                <p className=' mb-2 '>jewellery subcategory</p>
                
                <select onChange={(e)=>setjewellerysubcategory(e.target.value)} className='w-full py-1 px-2 border '>
                  <option value='Amulet'>Amulet</option>
                  <option value='Ring'>Ring</option>
                  <option value='Necklace'>Necklace</option>
                  <option value='Bracelet'>Bracelet</option>
                  <option value='Crown'>Crown</option>
                  <option value='Earrings'>Earrings</option>
                  <option value='Pendant'>Pendant</option>
                  <option value='Cloak Pin'>Cloak Pin</option>
                  <option value='Choker'>Choker</option>
                  <option value='Locket'>Locket</option>
                </select>
         
               </div>
               }
              </div>
                 
                 {
                    category ==='books'&&
                      <>
                      <p className='mt-2 mb-2'>Author Name</p>
                         <input onChange={(e)=>setauthor(e.target.value)} placeholder='Enter Authour Name' value={author} className='w-[350px] px-2 py-1'/>
                     </>
                         
                 }

{
                    (category ==='wands'|| 'jewellery') &&(
                      <>
                      <p className='mt-2 mb-2'>Powers</p>
                         <input onChange={(e)=>setpowers(e.target.value)} placeholder='powers ' value={powers} className='w-[350px] px-2 py-1'/>
                         
                     </> )
                         
                 }

                 
                  
                   <div className='sm:flex gap-2'>
                   <div>
                <p className='mb-2'>product price</p>
                <input onChange={(e)=>setprice(e.target.value)} value={price} className='w-full py-1 px-2 border  ' type='Number' placeholder='400'/>
               </div>
               <div>
                <p className='mb-2 '>currency</p>
                <select onChange={(e)=>setCurrency(e.target.value)} className='w-full border py-1 px-2'>
                  <option value="Galleons">Galleons</option>
                </select>
               </div>
                   </div>
                     
               

              <div className='mt-2'>
                 <p>Size</p>
                 <div className='flex gap-3'>
                 {
                  ["S","M","L","xl","kids 4-6","6-8","8-10"].map((size)=>(

                    <p key={size} onClick={()=>handlesize(size)} className={` border py-1 px-3 cursor-pointer ${selectedsize.includes(size)?"bg-black text-white":"bg-gray-300"}`}>{size}</p>
                  ))
                 }
                 </div>
                 
              </div>

              <div className='flex gap-2 mt-6 '>
               <input onChange={()=>setBestseller(prev=>!prev)} checked={Bestseller} type='checkbox' id='bestseller' className='cursor-pointer'   />
               <label htmlFor='bestseller' className='cursor-pointer'>Add to Bestseller</label>
              </div>

              <button className='mt-5 border py-2 px-3 bg-black text-white rounded-md'>Add</button>
               

               
            </div>
            
        </form>
    </div>
  )
}

export default Add
