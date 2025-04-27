

// palce order by cod 

import Razorpay from 'razorpay'

import orderModel from "../models/OrderModel.js"
import UserModel from "../models/userModel.js"





//Razorpay instances 

 const RazorpayInstances = new Razorpay({
    key_id:process.env.RAZORPAY_API_KEY ,
    key_secret:process.env.RAZORPAY_SECRET_KEY
 })


const placeorder = async (req,res)=>{

    try {

        const {userId , items, amount , address} = req.body

        const orderData = {
    
            userId,
            items,
            amount,
            address,
            paymentMethod:"COD",
            date:Date.now()
    
        }
    
    
        const newOrder = new orderModel(orderData)
        await newOrder.save()
    
        await UserModel.findByIdAndUpdate(userId,{cartDate:{}})
    
        res.json({success:true,message:"order placed"})
        
    } catch (error) {

        console.log(error)
        res.json({success:false,message:error.message})
        
    }
  
   

}

// for razorpay 

const razorpay = async (req,res)=>{

    const {userId , items , amount,address} = req.body

    try {

        const orderData = {

            userId,
            items,
            amount,
            address,
            paymentMethod:"Razorpay",
            date:Date.now()
    
        }
    
        const newOrder = new orderModel(orderData)
        await newOrder.save()
    
        const options = {
            amount : amount *100,
            currency:"INR",
            receipt:newOrder._id.toString()
    
        }
    
        const order = await RazorpayInstances.orders.create(options)
        res.json({success:true,order})
        
    } catch (error) {

        console.log(error)
        res.json({success:false,message:error.message})
 
    }


} 



const verifyrazorpay = async(req,res)=>{
           
    const {userId,razorpay_order_id} = req.body
    
    try {

        
    const orderInfo = await RazorpayInstances.orders.fetch(razorpay_order_id)
    if(orderInfo.status === 'paid'){
        await orderModel.findByIdAndUpdate(orderInfo.receipt,{payment:true})
        await UserModel.findByIdAndUpdate(userId,{cartData:{}})
        res.json({success:true,message:"payment is Successful"})
    }

    else{
        res.json({success:true,message:"payment failed"})
    }
        
    } catch (error) {
        
        console.log(error)
    res.json({success:false,message:error.message})
    }


}



// All orders data for admin panel

const allorders = async (req,res)=>{

    try {

        const orders = await orderModel.find({})
        res.json({success:true,orders})

        
    } catch (error) {

        console.log(error)
        res.json({success:false,message:error.message})
        
    }

}

// user order data for forntend 

const userorders = async (req,res)=>{

    try {

        const {userId} = req.body
        const orders = await orderModel.find({userId})
        res.json({success:true,orders})
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
        
    }

   


}

// update order status from admin panel 

const updateStatus = async (req,res) => {

    try {
        const {orderId,status} = req.body

    await orderModel.findByIdAndUpdate(orderId,{status})
    res.json({success:true,message:" Order Updated"})

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})

    }
     
    
}


export {placeorder,razorpay,allorders,userorders,updateStatus,verifyrazorpay}