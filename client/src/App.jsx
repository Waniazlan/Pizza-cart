import { useState } from 'react'
import Layout from './component/Layout'
import IndexPage from './component/indexPage'
import {Routes,Route} from 'react-router-dom'
import LoginPage from './component/loginPage'
import Register from './component/register'
import axios from 'axios'
import {UserContextProvider} from './UserContext'
import ProfilePage from './component/ProfilePage'
import Menu from './Pages/Menu'
import Cart from './Pages/Cart'








function App() {
  axios.defaults.baseURL = 'https://pizza-cart-87ob.onrender.com';
  axios.defaults.withCredentials = true;

  return (
    <UserContextProvider>
    <Routes>
      <Route path='/' element={<Layout />} >
      <Route index element={<IndexPage />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/account' element={<ProfilePage />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/cart' element={<Cart />} />

      
      </Route>
    </Routes> 
    </UserContextProvider>
  )
}

export default App
