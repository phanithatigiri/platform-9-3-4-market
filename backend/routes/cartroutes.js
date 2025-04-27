import express from "express" 
import { addtocart,updatecart,getusercart } from "../controllers/cartController.js"
import authUser from "../middleware/auth.js"


const cartRouter = express.Router()

cartRouter.post('/add',authUser,addtocart)
cartRouter.post('/update',authUser,updatecart)
cartRouter.post('/get',authUser,getusercart)


export default cartRouter