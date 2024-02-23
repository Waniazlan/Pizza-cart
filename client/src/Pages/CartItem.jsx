import { UserContext } from "../UserContext"
import { useContext } from "react"

export default function CartItem(props){
    const {id,menuName,Price,image} = props.data
    const{cart,addToCart,removeToCart,updateCartItemCount} = useContext(UserContext)
    return(
        <div className="bg-slate-100 md:justify-between justify-center md:flex grid grid-col gap-2 mx-3 mb-2 py-3 shadow-xl px-4  rounded-md text-center">
                  
            <div className="text-center justify-center py-3 md:flex flex-direction grid gap-3 grid-cols ">
            <img className=" object-cover h-20 w-20 rounded-xl" src={image} alt="" />  
                <h1 className="text-md font-bold  ">{menuName}</h1>
                <p className="font-bold">${Price}</p>
            </div>
          
            <div className="flex my-3 gap-3  bg-yellow-500 px-3 md:my-10"> 
                <button className="px-2" onClick={() =>removeToCart(id)} >-</button>
                <input value={cart[id]} className='justify-center text-center' onChange={(e) =>updateCartItemCount(Number(e.target.value),id)}/>
                <button onClick={() =>addToCart(id)}  className="">+</button>
            </div>
            
            
            
        </div>
    )
}