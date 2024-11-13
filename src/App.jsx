import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <Routes>

     <Route exact path="/" element={<Home></Home>} />
    </Routes>
       
      
    </>
  )
}

export default App
