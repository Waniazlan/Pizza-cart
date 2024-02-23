import {Link, Navigate} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'


export default function Register(){

    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const [redirect,setRedirect] = useState(false)

    async function handleSubmit(e){
        e.preventDefault()
        try {
           await axios.post('/register',{
                name,
                email,
                password
            }); alert('registration succesfull')
            setRedirect(true)
        } catch (error) {
            alert('registration fail')
        }
    }

    if(redirect){
        return <Navigate to={'/login'} />
    }
    
    return(
        <div className=" justify-around flex mt-10 items-center  "> 
      
        <form className=" border-2 rounded-xl shadow-2xl px-6 py-5 flex flex-col items-center gap-2 mx-auto md:w-[400px] ">
            <h1 className="text-2xl font-semibold  ">Register</h1>
                <input 
                value={name} 
                onChange={e =>setName(e.target.value)} 
                placeholder="Name" type='text'>

                </input>
                <input  
                value={email} 
                onChange={e =>setEmail(e.target.value)} 
                placeholder="Email" type='email'>                  
                </input>

                <input  
                value={password} 
                onChange={e =>setPassword(e.target.value)} 
                placeholder="Password" type='password'>
                </input>                                        
                <button onClick={handleSubmit} >Register</button>

               <div className="text-sm text-gray-600 py-2">Already have an account? <Link to={'/login'} className="text-blue-700 ">Login Now</Link></div>
            </form>
              
            
                     
        </div>
    )
}