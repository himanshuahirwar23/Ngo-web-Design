import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-20 bg-blue-200 flex justify-center items-center '>
        <ul className='flex justify-between items-center gap-8 text-[15px] '>
            <li>Home</li>
            <li>About</li>
            <li>Governing Body</li>
            <li>Program</li>
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