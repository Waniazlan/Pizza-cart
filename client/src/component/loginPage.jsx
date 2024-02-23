import { Link, Navigate } from "react-router-dom"
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import { useState,useContext } from "react"
import axios from 'axios'
import {UserContext} from '../UserContext'

export default function LoginPage(){

    const [email,setEmail] =useState('')
    const [password,setPassword] =useState('')
    const [redirect, setRedirect] = useState(false)
    const {setUser} = useContext(UserContext)

    async function handleSubmit(e){
        e.preventDefault()
        try {
            const {data} = await axios.post('/login', {email,password})
            setUser(data)
            alert('login succesfull')
            setRedirect(true)
        } catch (error) {
            
            alert('login fail')
        }
    }
    if(redirect){
        return <Navigate to={'/'} />
    }
    
    

    return(
        <div className=" justify-around flex mt-10 items-center  "> 
      
        <form onSubmit={handleSubmit} className=" border-2 rounded-xl shadow-2xl px-6 py-5 flex flex-col items-center gap-2 mx-auto md:w-[400px] ">
            
            <h1 className="text-2xl font-semibold  ">Login</h1>
                <input placeholder="Email" 
                value={email} 
                onChange={e =>setEmail(e.target.value)} 
                type='text'></input>

                <input placeholder="Password"
                 value={password} 
                 onChange={e =>setPassword(e.target.value)} 
                type='password'></input>      
                <Link className="text-sm cursor-pointer mt-2 text-blue">Forgot password?</Link>                              
                <button className="my-4">Log In</button>

           
           

               <div className="py-3 my-3 cursor ">Or login with</div>
               <div className="items-center flex gap-2 flex-row justify-center w-full h-full ">
                <img className='object-cover w-10 h-10 cursor-pointer' src={image1} alt='image'/>
                <img className='object-cover w-10 h-10 cursor-pointer' src={image2} alt='image'/>
                <img className='object-cover w-10 h-10 cursor-pointer' src={image3} alt='image'/>
               </div>
               <div className="text-sm text-gray-600 py-2">Dont have an account? <Link to={'/register'} className="text-blue-700 ">Register Now</Link></div>
            </form>
              
            
                     
        </div>
    )
}