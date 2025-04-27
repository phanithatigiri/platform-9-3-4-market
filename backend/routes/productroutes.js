import express from 'express'

import {addproduct,listproduct,singproduct,removeproduct} from '../controllers/ProductController.js'
import upload from '../middleware/multer.js'
import adminAuth from '../middleware/adminAuth.js'



const productRouter = express.Router()

productRouter.post('/add', adminAuth, upload.fields([{name:'image1',maxCount:1},{name:'image2',maxCount:1},{name:'image3',maxCount:1},{name:'image4',maxCount:1}]) ,addproduct)
productRouter.get('/list',listproduct)
productRouter.post('/single',singproduct)
productRouter.post('/remove',removeproduct)


export default productRouter 