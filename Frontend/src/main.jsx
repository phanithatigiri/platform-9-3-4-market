import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ShopContexProvider from './Contex/ShopContex.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
     <ShopContexProvider>
        <App />
     </ShopContexProvider>
    </BrowserRouter>,
)
