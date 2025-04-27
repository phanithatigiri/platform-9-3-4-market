import jwt from 'jsonwebtoken'

const adminAuth = async (req,res,next)=>{
    try {
       const {token} = req.headers
       if(!token){
        return res.json({success:false,msg:"user is Not Authorized Login again"})
       }  

       const tokendecode = jwt.verify(token,process.env.JWT_SECRET)

       if(tokendecode!==process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
         return res.json({success:false,msg:"user is Not Authorized Login again"})
       }
       next()
    } catch (error) {
         console.log(error)
         res.json({success:false,msg:error.message})
    }
}


export default adminAuth