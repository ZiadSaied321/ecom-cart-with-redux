import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PageLayot from '../src/layout/PageLayout'
import Home from './pages/Home'
import Cart from './pages/Cart'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<PageLayot />}>
        <Route index element={<Home/>} />
        <Route path='cart' element={<Cart/>} />
      </Route>
      <Route path='*' element={<div className='w-screen h-screen font-extrabold flex justify-center items-center'><h1>Error 404 Not Found</h1></div>} />
    </Routes>
  )
}
export default App