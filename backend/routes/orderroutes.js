import express from 'express'

import {placeorder,razorpay,allorders,userorders,updateStatus,verifyrazorpay} from '../controllers/OrderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'
const orderRouter = express.Router()


// Admin Features 

orderRouter.post('/list',adminAuth,allorders)
orderRouter.post('/status',adminAuth,updateStatus)


// Payment Features 

orderRouter.post('/cash',authUser,placeorder)
orderRouter.post('/razorpay',authUser,razorpay)

// User Feature 

orderRouter.post('/userorders',authUser,userorders)

// verifyrazorpay 

orderRouter.post('/verifyrazorpay',authUser,verifyrazorpay)


export default orderRouter