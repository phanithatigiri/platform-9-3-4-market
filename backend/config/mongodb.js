import mongoose from "mongoose";

const ConnectDB = async ()=>{
    
     mongoose.connection.on('connected', ()=>{
         console.log('DB Connected')
     })


    await mongoose.connect(`${process.env.MONGO_DB}/MagicWorld`)
}

export default ConnectDB