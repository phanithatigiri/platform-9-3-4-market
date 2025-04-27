import mongoose from "mongoose";


const ProductSchema = new mongoose.Schema({
     name:{type:String,required:true},
     description:{type:String,required:true},
     price:{type:Number,required:true},
     image:{type:Array,required:true},
     category:{type:String,required:true},
     subcategory:{type:String},
     powers:{type:String},
     author:{type:String},
     specialOffer:{type:String},
     sizeOptions:{type:Array,},
     bestseller:{type:Boolean},
     currency:{type:String,required:true},
     date:{type:Number,required:true}
})

const productModel = mongoose.models.product || mongoose.model("product",ProductSchema);


export default productModel