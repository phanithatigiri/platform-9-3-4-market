import jwt from 'jsonwebtoken'

const authUser = async (req,res,next)=>{
    const {token} = req.headers
    if(!token){
        return res.json({success:false,msg:"unauthorized Login again"})
    }

    try {

        const tokendecode = jwt.verify(token,process.env.JWT_SECRET)
        req.body.userId = tokendecode.id
        next()
        
    } catch (error) {
         console.log(error)
         return res.json({success:false,msg:error.msg})
    }
}

export default authUser