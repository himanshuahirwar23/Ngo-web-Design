import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About/About'

function App() {

  return (
    <>
    <Routes>

     <Route exact path="/" element={<Home></Home>} />
     <Route exact path="/about" element={<About></About>} />
    </Routes>
       
      
    </>
  )
}

export default App
