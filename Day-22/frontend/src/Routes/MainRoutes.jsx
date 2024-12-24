import React from 'react'
import Home from '../Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        </Routes>
    </div>
  )
}

export default MainRoutes