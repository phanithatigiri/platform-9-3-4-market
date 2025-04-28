import { createContext, useEffect, useState } from "react";
import { magicalWands } from "../assets/Wands/wands-assets";
import { magicalJewellery } from "../assets/jewellery/Jassest";
import { Bookss } from "../assets/books/asset";
import {useNavigate} from 'react-router-dom'
import { lastestproducts } from "../assets/lastestproducts/latestasset";
import { toast } from "react-hot-toast";
import axios from 'axios'


export const ShopContext = createContext();

const ShopContextProvider = (props)=>{
 const [search,setSearch]=useState('')
 const [showsearch,setshowsearch]=useState(false);
 const [cartitems,setcartitems]=useState({});
 const [products,setproducts] = useState([]) 
 const [token,settoken] = useState('')
 const currency = "Gelleons"
 const delivery_fee = 5;
 const navigate = useNavigate();
 const backendurl= import.meta.env.VITE_BACKEND_URL
    
    const addTocart = async (itemId,size)=>{

        const product = products.filter((item)=>item._id ===itemId)

           
        if(!size){
            toast.error('Select The Size',{
                position:'top-center',
                autoClose:2000
            })
            
            return;

        }

            let cardData = structuredClone(cartitems)
            if(cartitems[itemId]){
                if(cardData[itemId][size]){
                    cardData[itemId][size] +=1 
                }
                else{
                    cardData[itemId][size] = 1
                }
            }
            else{
                cardData[itemId] = {}
                cardData[itemId][size] = 1
            }

            setcartitems(cardData)

            //added successful message

            toast.success('Yay! 🎉 Added to cart!',{
                position:"top-right",
                autoClose:1000
            })



          if(token){
              try {

                 await axios.post(backendurl+ '/api/cart/add',{itemId,size},{headers:{token}})
                
                
              } catch (error) {

                console.log(error)
                toast.error(error.message)
                
              }
          }
    }
          

    const getcount =()=>{
        let totalcount = 0;
        for (const items in cartitems){
            for(const item in cartitems[items]){
                try {
                    if(cartitems[items][item] > 0){
                        totalcount += cartitems[items][item];
                    }
                } catch (error) {
                    console.log(error)
                    toast.error(error.message)
                }
            }
        }
        return totalcount ; 
    }
     

    const updateQuantity = async (itemId,size,quantity)=>{

        
        let cartData = structuredClone(cartitems)
        cartData[itemId][size] = quantity ;
        setcartitems(cartData)

        try {

            if(token){

                await axios.post(backendurl+'/api/cart/update',{itemId,size,quantity},{headers:{token}})

            }
            
        } catch (error) {

              console.log(error)
              toast.error(error.message)
            
        }
    }



    const getuserdata = async (token)=>{
        try {

            const response = await axios.post(backendurl + '/api/cart/get' , {},{headers:{token}})
            if (response.data.success){
                setcartitems(response.data.cartData);
            }
            
        } catch (error) {

            console.log(error)
              toast.error(error.message)
            
        }
    }

    const getCartAmount= ()=>{
        let totalAmount=0;
        for (const items in cartitems){
          let itemsInfo = products.find((product)=>product._id===items);
          for(const item in cartitems[items]){
             try {
              if(cartitems[items][item]>0){
                totalAmount+=itemsInfo.price*cartitems[items][item];
              }
             } catch (error) {
              
             }
          }
        }
        return totalAmount;
       }


      

      const displayproduct = async()=>{
           try {

            const response = await axios.get(backendurl+"/api/product/list")
            if(response.data.success){
                setproducts(response.data.product)
               
            }

            else{
              toast.error(response.msg)
            }
            
           } catch (error) {
              console.log(error)
              toast.error(error.msg)
           }
        
      }

      useEffect(()=>{
          displayproduct()
      },[])

      useEffect(()=>{
        if(!token && localStorage.getItem('token') ){
              settoken(localStorage.getItem('token'))
              getuserdata(localStorage.getItem('token'))
        }
      },[])

    const values = {
         products,magicalWands,magicalJewellery,Bookss,lastestproducts,
        search,setSearch,showsearch,setshowsearch,currency,cartitems,addTocart,
        getcount,updateQuantity,getCartAmount,delivery_fee,backendurl,token,settoken,navigate,setcartitems
    }
    return (
        <ShopContext.Provider value={values}>
         {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider