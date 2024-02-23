import {createContext, useEffect, useState} from "react";
import axios from "axios"
import { Menus } from "./Pages/Menus";
import CartItem from "./Pages/CartItem";


export const UserContext = createContext({});

const getDefaultCart = () => {
  let cart = {};
 
  Menus.forEach(menu => {
    cart[menu.id] = 0;
  });
  return cart;
};

export function UserContextProvider({children}) {
  const [user,setUser] = useState(null);
  const [ready, setReady] = useState(null);
  const [cart,setCart] =useState(getDefaultCart())
 
  

  const addToCart = (itemId) =>{
    setCart((prev) =>({...prev,[itemId] :prev[itemId] + 1 }))
  }
  const removeToCart = (itemId) =>{
    setCart((prev) =>({...prev,[itemId] :prev[itemId] - 1 }))
  }

  const updateCartItemCount = (newAmount, itemId) =>{
    setCart((prev) =>({...prev,[itemId] :newAmount}))
  }

  const getTotalCartAmount = () =>{
    let totalAmount = 0;
    for(const item in cart){
      if(cart[item] > 0){
        let itemInfo = Menus.find((menu) =>menu.id === Number(item))
        totalAmount += cart[item] * itemInfo.Price;
      }
    }
    return totalAmount;
  }

  

 useEffect(() =>{
    if(!user){
      axios.get('/login').then(({data}) =>{
        setUser(data);
        setReady(true);
      });
    }
 },[])

  return (
    <UserContext.Provider value={{user, setUser,ready,addToCart,removeToCart,cart,updateCartItemCount,getTotalCartAmount}}>
      {children}
    </UserContext.Provider>
  );
}