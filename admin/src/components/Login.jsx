import React, { useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Login = ({settoken}) => {

    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')


    const onSubmitHandler = async (e)=>{
        try {
            e.preventDefault()
            const response = await axios.post(backendUrl+'/api/user/admin',{email,password}) 
           
            if(response.data.success){
                settoken(response.data.token)
            }

            else{
                toast.error(response.data.msg)
            }

        
        } catch (error) {
            console.log(error)
            toast.error(error.msg)
        }
       
    }

  return (
        <div className='flex justify-center min-h-screen items-center'>
            
            <div className='max-w-md border border-gray-400 py-5 px-6 bg-gray-200'>
            <h1 className='pb-5 text-center  magic-text text-[40px] font-bold text-transparent bg-gradient-to-r  from-red-500 via-blue-500 to-green-500  bg-clip-text'>Admin Login</h1>
            <form onSubmit={onSubmitHandler}>
                <div className='mb-2 min-w-72'>
                    <p className='mb-2 font-serif'>Email Address </p>
                <input onChange={(e)=>setemail(e.target.value)} value={email} className= 'rounded-md w-full border border-gray-400 py-2 px-2 outline-none' type='email' placeholder='enter address' required/>

                </div>
                <div className=''>
                    <p className='mb-2 font-serif'>Password</p>
                <input onChange={(e)=>setpassword(e.target.value)} value={password} className=' rounded-md w-full border border-gray-400 py-2 px-2 outline-none' type='password' placeholder='Password'/>
                </div>
                <button className='mt-4 bg-black font-serif text-white py-2 px-2 w-full rounded-lg'>Login</button>
         
               
            </form>
            </div>
           
        </div>
    
  )
}

export default Login
