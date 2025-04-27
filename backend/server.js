import express from 'express'
import cors from 'cors'


import 'dotenv/config'
import ConnectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userroutes.js'
import productRouter from './routes/productroutes.js'
import cartRouter from './routes/cartroutes.js'
import orderRouter from './routes/orderroutes.js'



// App config
const app = express()
const port = process.env.PORT || 4000
ConnectDB()
connectCloudinary()

//Middlewares
app.use(express.json())
app.use(cors())

//Razorpay

//api endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)



app.get('/', (req,res)=>{
    res.send("Api is working ")
})

app.listen(port, ()=>console.log('server is running on port :'+port))

