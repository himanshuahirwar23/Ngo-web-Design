import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";


const Navbar = () => {
  
  return (
    <div className='w-full h-20 bg-blue-200 flex justify-center items-center '>
        <ul className='flex justify-between items-center gap-6 text-[15px] '>
           <NavLink to='/'> <li>Home</li></NavLink>
          
            <NavLink to='/about'><li>About</li></NavLink>
          <NavLink>  <li className='flex items-center gap-2'>Governing Body <IoIosArrowDown />
            </li> </NavLink>
            <NavLink>  <li className='flex items-center gap-2'>Programs <IoIosArrowDown />
            </li> </NavLink>
            <li>Gallery</li>
            <li>Membership</li>
            <li>Annual Reports</li>
            <li>Contact Us</li>
        </ul>
        <button className='bg-blue-500 text-white px-5 py-2 ml-20 rounded-md'>Donate Now</button>

        
    </div>
  )
}

export default Navbar