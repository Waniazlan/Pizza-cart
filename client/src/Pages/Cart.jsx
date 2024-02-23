import {Menus} from '../Pages/Menus'
import {Link } from 'react-router-dom'
import { UserContext } from "../UserContext"
import { useContext } from "react"
import CartItem from './CartItem'


export default function Cart(){
    const{cart,getTotalCartAmount} = useContext(UserContext)
    const totalAmount = getTotalCartAmount()

    return(
        <div className="mt-2 text-center justify-center">
            <h1 className="text-3xl font-bold text-gray-700 my-3">Your cart items</h1>
            <div className="flex flex-col mx-2 gap-3 ">
            {Menus.map((menu) =>{
                  if(cart[menu.id] !==0){
                    return(<CartItem data={menu}/>)
                  }
                    
                })}
            </div>
            <p className="font-bold text-xl py-4" >Subtotal: ${totalAmount}</p>
            <div className='grid grid-col  gap-3 mx-4 md:flex text-center font-bold justify-center my-3 pb-3'>
                
                <Link to={'/menu'}className=" px-4 py-2 bg-yellow-500 text-white rounded-full
             hover:bg-yellow-400 focus:outline-none focus:bg-yellow-300 transition duration-300 ease-in-out transform hover:scale-105">Continue Shopping</Link>
                <Link className=" px-4 py-2 bg-yellow-500 text-white rounded-full
             hover:bg-yellow-400 focus:outline-none focus:bg-yellow-300 transition duration-300 ease-in-out transform hover:scale-105">CheckOut</Link>
            </div>
            
        </div>
    )
}