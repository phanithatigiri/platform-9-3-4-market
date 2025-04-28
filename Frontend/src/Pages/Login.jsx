import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Contex/ShopContex'
import axios from 'axios'
import {toast} from 'react-hot-toast'


const Login = () => {
  const [currentstate,setcurrentstate] = useState('Login')
  const {token,settoken,navigate,backendurl} = useContext(ShopContext)
  const [name,setname] = useState('')
  const [email,setemail] = useState('')
  const [password,setpassword] = useState('')

  const onSubmithandler = async(event) => {
      event.preventDefault();
  

      try {

        if(currentstate === 'Sign Up'){

          const response = await axios.post(backendurl + '/api/user/register',{name,email,password})
          if(response.data.success){
            settoken(response.data.token)
            localStorage.setItem('token',response.data.token)
          }
          else{
            toast.error(response.data.msg)
          }

        }

        else{
          const response = await axios.post(backendurl + '/api/user/login',{email,password})
          if(response.data.success){
            settoken(response.data.token)
            localStorage.setItem('token',response.data.token)
           
          }
          else{
            toast.error(response.data.msg)
          }
        }
      
        
      } catch (error) {
        console.log(error)
        toast.error(error.msg)
      }
  }


   useEffect(()=>{
       if(token){
        navigate('/')
       }
   },[token])

  

  return (
    <div className="relative min-h-screen overflow-hidden">
    {/* Blurred background */}
    <div className="absolute inset-0 bg-[url('/bg.png?v=2')] bg-cover bg-center blur-[1px] z-0" />
  
    {/* Content (form, heading, etc) */}
    <div className="relative z-10 flex flex-col gap-2 justify-center rounded-md items-center p-4 min-h-screen">
      <div className="bg-[#fcfaf4] max-w-md  w-full rounded relative   ">
      <h1 className="text-[30px]  text-gray-600 sm:text-[50px] magic-text text-center">
  <span className="bg-gradient-to-r font-medium from-red-500 via-blue-500 to-green-500 text-transparent bg-clip-text">
  Platform 9¾ Market
  </span>{' '}
  <span>🔮</span>
</h1>
<p className='text-center mb-2 text-sm font-serif font-semibold'>Not Just a Platform—A Portal to Wonder</p>

      </div>
  
      <form
        onSubmit={onSubmithandler}
        className="sm:max-w-md w-full shadow-lg shadow-gray-400 p-4 rounded-md bg-[#fcfaf4]"
      >
        <div className="font-serif font-medium text-xl  text-center mb-8">
          <h1 className='font-semibold text-gray-700 '>{currentstate}</h1>
        </div>
  
        {currentstate === 'Login' ? (
          ''
        ) : (
          <div>
            <label htmlFor="Name" className="font-medium text-sm">
              Name
            </label>
            <input
              onChange={(e) => setname(e.target.value)}
              value={name}
              className="border border-gray-800 rounded-sm py-2 px-3 w-full mt-1 mb-2 bg-white"
              type="text"
              placeholder="Name"
              id="Name"
              required
              autoComplete="name"
            />
          </div>
        )}
  
        <label htmlFor="Email" className="font-medium text-sm">
          Email Address
        </label>
        <input
          onChange={(e) => setemail(e.target.value)}
          value={email}
          className="border border-gray-800 rounded-sm bg-white py-2 px-3 w-full mt-1 mb-2"
          type="email"
          placeholder="Email Address"
          required
          id="Email"
          autoComplete="email"
        />
  
        <label htmlFor="password" className="font-medium text-sm">
          password
        </label>
        <input
          onChange={(e) => setpassword(e.target.value)}
          value={password}
          className="border border-gray-800 rounded-sm bg-white py-2 px-3 w-full mt-1"
          type="password"
          placeholder="Password"
        />
  
        <div className="w-full flex justify-between mt-2">
          {currentstate ==='Login'}
          <p className="cursor-pointer font-semibold text-sm">Forgot Your Password ?</p>
          {currentstate === 'Login' ? (
            <p onClick={() => setcurrentstate('Sign Up')} className="cursor-pointer font-semibold text-sm">
              Create Account
            </p>
          ) : (
            <p onClick={() => setcurrentstate('Login')} className="cursor-pointer font-semibold text-sm">
              Login Here
            </p>
          )}
        </div>
  
        <button className="bg-[#0c0502] w-full rounded-md text-white font-medium py-2 px-3 mt-6">
          {currentstate === 'Login' ? 'Sign In' : 'Sign Up'}
        </button>
      </form>
    </div>
  </div>
  
        
    
  )
}

export default Login
