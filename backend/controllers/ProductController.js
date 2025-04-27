import {v2 as cloudinary} from 'cloudinary'
import productModel from '../models/ProductModel.js'


// function for add product

const addproduct = async(req,res)=>{
    try {
        const {name, description, price,specialOffer,category,currency,sizeOptions,bestseller,subcategory,author,powers} = req.body

        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]

       const images = [image1,image2,image3,image4].filter((item)=>item!==undefined)
       
       const imageUrl = await Promise.all(
         images.map( async (item)=>{
            let result = await cloudinary.uploader.upload(item.path,{resource_type:'image'})
            return result.secure_url
            
         })
       )
       

       const productdata = {
              name,
              price,
              description,
              sizeOptions:JSON.parse(sizeOptions),
              bestseller: bestseller === "true" ? true : false,
              currency,
              category,
              subcategory,
              powers,
              author,
              specialOffer,
              image:imageUrl,
              date:Date.now()
       }


       const product = new productModel(productdata)

       await product.save()

        res.json({success:true,msg:"product is added "})

 
     } catch (error) {
         console.log(error);
         res.json({success:false,message:error.message})
     } 
   
   
    
}

// function for list product 

const listproduct = async(req,res)=>{
   try {
       
    const product = await productModel.find({})
    res.json({success:true,product})

   } catch (error) {
    console.log(error);
    res.json({success:false,message:error.message})
   }
    
}

//function for single product 

const singproduct= async(req,res)=>{
    try {

      const { productId } = req.body
       const product= await productModel.findById(productId)
        res.json({success:true,product})
      
    } catch (error) {
      console.log(error);
      res.json({success:false,message:error.message})
    }
        
}

// function for removing product 

const removeproduct = async(req,res)=>{
     
       await productModel.findByIdAndDelete(req.body.id)
       res.json({success:true,msg:"product removed"})

}


export {addproduct,listproduct,singproduct,removeproduct}