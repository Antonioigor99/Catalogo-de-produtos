import React from 'react'
import Home from '../pages/Home.jsx'
import Products from '../pages/Product.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Rotas = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<Products />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Rotas