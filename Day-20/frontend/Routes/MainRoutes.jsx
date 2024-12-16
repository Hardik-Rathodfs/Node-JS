import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../src/pages/HomePage'
import Login from '../src/pages/Login'
import Signup from '../src/pages/Signup'
import About from '../src/pages/About'
import Contact from '../src/pages/Contact'
import CreateBlog from '../src/pages/CreateBlog'
import SingleBlog from '../src/pages/SingleBlog'


const MainRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/aboutus' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/createblog' element={<CreateBlog/>}></Route>
        <Route path='/singleblog' element={<SingleBlog/>}></Route>
    </Routes>
    </>
  )
}

export default MainRoutes