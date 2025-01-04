import React from 'react'
import Home from '../Pages/Home'
import { Route, Routes } from 'react-router'
import Signup from '../Pages/Singup'
import Login from '../Pages/Login'
import BlogPost from '../Pages/BlogPost'
import MyBlogs from '../Pages/MyBlogs'
import WriteBlog from '../Pages/WriteBlog'
import Single from '../Pages/Single'
import EditBlog  from '../Pages/EditBlog'
import Contact from '../Pages/Contact'

const MainRouter = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/blog/:id' element={<BlogPost/>}></Route>
        <Route path='/my-blog' element={<MyBlogs/>}></Route>
        <Route path='/allBlogs/:id' element={<Single/>}></Route>
        <Route path='/editblog/:id' element={<EditBlog/>}></Route>
        <Route path='/write-blog' element={<WriteBlog/>}></Route>
        
    </Routes>
    </>
  )
}

export default MainRouter