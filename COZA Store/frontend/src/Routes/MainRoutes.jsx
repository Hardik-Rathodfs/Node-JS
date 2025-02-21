import React from 'react'
import Signup from '../Pages/Signup'
import Login from '../Pages/Login'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Pages/Home'
import ForgotPass from '../Pages/ForgotPass'
import Admin from '../Pages/Admin'

const MainRoutes = () => {
  return (
    <div>
          <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/forgotpassword" element={<ForgotPass/>}/>
        <Route path="/admin" element={<Admin/>}></Route>
        
        </Routes>
    </div>
  )
}

export default MainRoutes