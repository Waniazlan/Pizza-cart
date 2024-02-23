
import { Outlet } from 'react-router-dom'
import Headerr from './Headerr'


export default function Layout(){
    return(
      <div>
            <Headerr />
            <Outlet />
           
        </div>
       
    )
}