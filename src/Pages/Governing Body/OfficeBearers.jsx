import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Showcase from '../Showcase'
import Footer from '../Footer'
import { NavLink } from 'react-router-dom'

const OfficeBearers = () => {
  return (
    <div className='w-full'>
        <Navbar></Navbar>
        <div
        className="w-full h-[362px] bg-center	flex items-center justify-center  mb-20"
        style={{ backgroundImage: `url(governing.png)` }}
      >
        <div className="text-white leading-10 text-center pt-12  w-[600px] h-[200px] ">
          <p>Home / Governing Body</p>

          <h1 className=" text-5xl font-semibold">Office Bearers</h1>
        </div>
      </div>
    <div className='w-full h-[450px] flex items-center leading-9	 bg-white'>
        <div className='w-full px-24 h-[400px]  gap-5 flex'>
            <div className='card w-[300px] h-full  '>
                <img src="bearer-1.png" alt="" />
                <h1 className='text-lg font-semibold mt-5	'>Sanobar Ali Qureshi</h1>
                <h5>President</h5>
                <NavLink to="/sanobar">
    <button className="bg-[#5044eb] text-white px-10 rounded-md relative bottom-[9rem]  transition-opacity duration-300">
      View Profile
    </button>
    </NavLink>
            </div>
            <div className="card w-[300px] h-full group relative">
  <div>
    <img src="bearer-2.png" alt="" />
  </div>
  
  <div className="mb-24">
    <h1 className="text-lg font-semibold mt-5">Saleem Ahmed Qureshi</h1>
    <h5>Vice President</h5>
    
    <NavLink to="/saleem">
    <button className="bg-[#5044eb] text-white px-10 rounded-md relative bottom-[9rem]  transition-all duration-300">
      View Profile
    </button>
    </NavLink>
  </div>
</div>
            <div className='card w-[300px] h-full '>
                <img src="bearer-3.png" alt="" />
                <h1 className='text-lg font-semibold mt-5	'>Mohd Aashqeen Qureshi</h1>
                <h5>Secretary</h5>
                <NavLink to="/mohd">
    <button className="bg-[#5044eb] text-white px-10 rounded-md relative bottom-[9rem]  transition-all duration-300">
      View Profile
    </button>
    </NavLink>
                
            </div>
            <div className='card w-[300px] h-full '>
                <img src="bearer-4.png" alt="" />
                <h1 className='text-lg font-semibold mt-5	'>Moin Khaleel Qureshi</h1>
                <h5>Women's wing President</h5>
                <NavLink to="/moin">
    <button className="bg-[#5044eb] text-white px-10 rounded-md relative bottom-[9rem]  transition-all duration-300">
      View Profile
    </button>
    </NavLink>
            </div>
           
        </div>
    </div>
    <Showcase></Showcase>
    <div className='w-full h-20'></div>
    <Footer></Footer>
    </div>
  )
}

export default OfficeBearers