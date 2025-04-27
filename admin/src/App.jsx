import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add'
import Orders from './pages/Orders'
import LIst from './pages/LIst'
import Login from './components/Login'
import { ToastContainer } from 'react-toastify'


export const backendUrl = import.meta.env.VITE_BACKEND_URL

const App = () => {
   const [token,settoken]=useState(localStorage.getItem('token')?localStorage.getItem('token'):'')
  
   useEffect(()=>(
      localStorage.setItem('token',token)
   ),[token])

  return (
  
    
     <div className='bg-gray-50 min-h-screen'>
      <ToastContainer/>
      {
         token === "" ? <Login settoken={settoken} />
         : 
         <>
         <Navbar settoken={settoken}/>
         <hr/>
         <div className='flex w-full'>
         <Sidebar/>
          <div className=' w-[70%] mx-auto ml-[max(5vw,25px)] py-5 '>
              <Routes>
                 <Route path='/add' element={<Add token={token} />}/>
                  <Route path='/orders' element={<Orders token={token}/>}/>
                  <Route path='/list' element={<LIst />}/>
              </Routes>
          </div>
         </div>
         
         </>
      }
        
     
     </div>
      

    
  )
}

export default App
