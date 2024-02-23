import { UserContext } from "../UserContext"
import { useContext} from "react"

export default function MenuSelection(props){
const {id, items,menuName,ingredient,Price,image} = props.data
const{addToCart,cart} = useContext(UserContext)
const cartItemAmount = cart[id]

return(
    <div className="rounded-lg overflow-hidden bg-white shadow-md">
    <img className="object-cover w-full h-40" src={image} alt={menuName} />
    <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{menuName}</h2>
        <p className="text-gray-700 mb-2">{ingredient}</p>
        <p className="text-gray-900 font-semibold">${Price}</p>
        <button 
            className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded-full
             hover:bg-yellow-400 focus:outline-none focus:bg-yellow-300 transition duration-300 ease-in-out transform hover:scale-105"
            onClick={() => addToCart(id)}
        >
            <span className="mr-2">Add to Cart</span>
            <span className="text-sm font-bold">({cartItemAmount})</span>
        </button>
    </div>
</div>
)
}