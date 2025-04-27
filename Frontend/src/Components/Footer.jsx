import React from 'react'
import { asset } from '../assets/books/asset'
import { useLocation } from 'react-router-dom'

const Footer = () => {


  return (
    <div className='mt-10'>
      <footer className="bg-gray-800 py-10 text-white px-1 rounded-md ">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* <!-- Address Section --> */}
    <div>
      <h3 className="text-l font-bold  mb-4 font-serif inline-flex ">
        <img className='w-6' src={asset.loc}/> Our Address 
      </h3>
      <div className='px-5 font-serif space-y-1 text-sm sm:text-md  '><p>Diagon Alley, Magical Marketplace</p>
      <p>Hogwarts Region, Wizarding World</p>
      <p>OWL Post Code: 12345</p></div>
      
    </div>

    {/* <!-- Quick Links --> */}
    <div>
      <h3 className=" font-bold mb-4 font-serif">🔗 Quick Links</h3>
      <ul className="space-y-2 space-x-2 font-serif text-sm " >
        <li><a href="/" className="hover:underline">About Us</a></li>
        <li><a href="/" className="hover:underline">Shop</a></li>
        <li><a href="/" className="hover:underline">FAQs</a></li>
        <li><a href="/" className="hover:underline">Contact Us</a></li>
      </ul>
    </div>
      
  </div>

  {/* <!-- Bottom Bar --> */}
  <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
    <p>© 2025 Magical World. All rights reserved. | Crafted with ✨ and 🪄</p>
  </div>
</footer>

    </div>
  )
}

export default Footer
