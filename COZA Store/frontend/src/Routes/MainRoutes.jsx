import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Pages/Home'
import Signup from '../Pages/Signup'
import Login from '../Pages/Login'
import ForgotPass from '../Pages/ForgotPass'
import Admin from '../Pages/Admin'
import PrivateRoute from '../Components/PrivateRoute'
import Cart from '../Pages/Cart'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const MainRoutes = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/forgotpassword" element={<ForgotPass/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/admin" element={  
          <PrivateRoute>
            <Admin/>
          </PrivateRoute>
        }/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default MainRoutes