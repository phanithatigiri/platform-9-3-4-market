import UserModel from "../models/userModel.js"
import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const createtoken = (id)=>{
  return jwt.sign({id},process.env.JWT_SECRET)
}


// Route for user login
const loginUser = async (req,res)=>{
  try {
     
    const {email,password} = req.body
    const user = await UserModel.findOne({email})
    if(!user){
        return res.json({success:false,msg:'user not exists '})
    }
    const passMatch = await bcrypt.compare(password,user.password)
    if(passMatch){
        const token = createtoken(user._id)
        res.json({success:true,token})
    }
    else{
      res.json({success:false,msg:"Invalid Credentials"})
    }

  } catch (error) {

    console.log(error)
    res.json({success:false,msg:error.message})
  }
  


}

// Route for user Register 

const registerUser = async (req,res)=>{
    
     try {
      const {name,email,password} = req.body

      const exist = await UserModel.findOne({email})
      if(exist){
        return  res.json({ success:false, msg:"sorry User is already exist "})
      }

      //validating email
      if(!validator.isEmail(email)){
        return res.json({ success:false, msg:"Enter a valid Email"})
      }
      if(password.length < 8){
        return  res.json({success:false,msg:"Password must be atleast 8 characters "})
      }

      const salt = await bcrypt.genSalt(10)
      const hashedpassword = await bcrypt.hash(password,salt)

      const newuser = new UserModel({
        name,
        email,
        password:hashedpassword
      })


      const user = await newuser.save()

      const token = createtoken(user._id)

      res.json({success:true,token})

     } catch (error) {
        console.log(error)
        res.json({success:false,msg:error.message})
     }
     

     
}

// Route for Admin panel

const adminLogin = async (req,res) =>{
      const {email,password} = req.body
      if(email===process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
        const token = jwt.sign(email+password,process.env.JWT_SECRET)
        res.json({success:true,token})
      }

      else{
        res.json({success:false,msg:"Invalid Credintials"})
      }

      
    
}

export {loginUser,registerUser,adminLogin}