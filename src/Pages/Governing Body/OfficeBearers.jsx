import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Showcase from '../Showcase'
import Footer from '../Footer'

const OfficeBearers = () => {
  return (
    <div className='w-full'>
        <Navbar></Navbar>
        <div className='mb-10'>
        <img src="office.png" alt="" />
    </div>
    <div className='w-full h-[450px] flex items-center bg-white'>
        <div className='w-full px-24 h-[400px]  gap-5 flex'>
            <div className='w-[300px] h-full  '>
                <img src="bearer-1.png" alt="" />
                <h1 className='text-lg font-semibold	'>Sanobar Ali Qureshi</h1>
                <h5>President</h5>
            </div>
            <div className='w-[300px] h-full  '>
                <img src="bearer-2.png" alt="" />
                <h1 className='text-lg font-semibold	'>Saleem Ahmed Qureshi</h1>
                <h5>Vice President</h5>
            </div>
            <div className='w-[300px] h-full '>
                <img src="bearer-3.png" alt="" />
                <h1 className='text-lg font-semibold	'>Mohd Aashqeen Qureshi</h1>
                <h5>Secretary</h5>
            </div>
            <div className='w-[300px] h-full '>
                <img src="bearer-4.png" alt="" />
                <h1 className='text-lg font-semibold	'>Moin Khaleel Qureshi</h1>
                <h5>Women's wing President</h5>
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