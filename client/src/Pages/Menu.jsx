import { useState } from 'react'
import {Menus} from '../Pages/Menus'
import MenuSelection from './MenuSelection'


export default function Menu(){
    const [selectedItem, setSelectedItems] = useState(null)
    const [query,setQuery] =useState('')
    

    const handleItemClick = (items) =>{
        setSelectedItems(items)
    }

    const filteredMenus = selectedItem ? Menus.filter(menu => menu.items === selectedItem) : Menus;
    return(
        
        <div className="mt-4 text-center">
            <h1 className="text-3xl font-bold text-gray-700 my-3">Our Menu</h1>
            <div className="mx-3 md:mx-20 py-2 px-3 flex rounded-sm shadow-md mb-3 bg-slate-100 gap-3 text-center justify-between">
                <input className="bg-transparent border-none w-full " onChange={(e) =>setQuery(e.target.value)} type='text' placeholder="Search" />
                <div className=" rounded-full  hover:bg-slate-200 ease-in duration-200  px-3 py-2" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                </div>
                    

            </div>
            <div className="flex text-center text-md justify-center mb-4 gap-5 py-3 font-bold">
                <p className="category" onClick={() =>handleItemClick('Pizza')}>Pizza</p>
                <p className="category" onClick={() =>handleItemClick('sidedishes')}>Side Dish</p>
                <p className="category" onClick={() =>handleItemClick('drinks')}>Drinks</p>
            </div>
            <div className="grid md:grid-cols-4 px-2 mx-4 gap-4 ">
                {filteredMenus.filter((menu) =>menu.menuName.toLowerCase().includes(query)).map((menu) =>{
                    return(<MenuSelection data={menu} />)
                    
                })}
                   
            </div>
        </div>
    )
}