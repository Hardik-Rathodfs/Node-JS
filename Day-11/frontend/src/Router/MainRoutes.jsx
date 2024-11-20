import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Addbooks from '../components/AddBooks'
import Allbooks from '../components/AllBooks'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Addbooks/>}></Route>
        <Route path='/allbooks' element={<Allbooks/>}></Route>
    </Routes>
)
}

export default MainRoutes