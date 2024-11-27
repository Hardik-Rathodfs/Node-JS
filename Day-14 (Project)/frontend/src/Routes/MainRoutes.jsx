import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import AddMovie from '../components/AddMovie'
const MainRoutes = () => {
  return (
     <Routes>
            <Route path='/addmovie' element={<AddMovie/>}></Route>
            <Route path='/allmovie' element={<Home/>}></Route>
        </Routes>
  )
}

export default MainRoutes