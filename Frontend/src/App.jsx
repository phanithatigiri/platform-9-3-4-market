import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import About from './Pages/About'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Dresscollections from './Pages/Dresscollections'
import CollectionsW from './Pages/CollectionsW' 
import Navbar from './Components/Navbar'
import CollectionsB from './Pages/CollectionsB'
import CollectionsJ from './Pages/CollectionsJ'
import MCart from './Pages/MCart'
import MProduct from './Pages/MProduct'
import MOrders from './Pages/MOrders'
import Searchbar from './Components/Searchbar'
import { ToastContainer, toast } from 'react-toastify';
import PlaceOrders from './Pages/PlaceOrders'
import Footer from './Components/Footer'
import { Toaster } from 'react-hot-toast';

const App = () => {

  const location = useLocation()

  const isLogin = location.pathname === '/login'

  return (
     <>
         <div className={`${isLogin ? '':'p-4 sm:p-6 md:p-8 lg:p-10'}  `}>
          {!isLogin && <Navbar/>}
       <ToastContainer/>
       <Toaster/>
       {!isLogin && <Searchbar/>}
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/dcollection' element={<Dresscollections/>}/>  
            <Route path='/login' element={<Login/>}/>
            <Route path='/bcollections' element={<CollectionsB/>}/>
            <Route path='/wcollections' element={<CollectionsW/>}/>  
            <Route path='/jcollections' element={<CollectionsJ/>}/> 
            <Route path='/mcart' element={<MCart/>}/> 
            <Route path='/product/:productId' element={<MProduct/>}/>  
            <Route path='/morders' element={<MOrders/>}/> 
            <Route path='/place-order' element={<PlaceOrders/>}/>
          </Routes>
          
    </div>
      {!isLogin && <Footer/>}

     </>
   
  )
}

export default App
