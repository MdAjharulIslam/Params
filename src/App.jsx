import React from 'react'
import AllProducts from './AllProducts'
import Product from './Product'
import { Routes, Route } from 'react-router-dom' 

const App = () => {
  return (
    <div>
     

      <Routes>
        <Route path='/' element={<AllProducts/>} />
        <Route path='/product/:id' element={<Product/>} />
      </Routes>
    </div>
  )
}

export default App
