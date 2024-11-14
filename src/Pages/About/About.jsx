import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Page1 from '../Page1'
import Showcase from '../Showcase'
import Dashboard from '../Dashboard'
import Footer from '../Footer'
import Page3 from './Page3'

const About = () => {
  return (
    <div>
        <Navbar></Navbar>
    <div className='mb-10'>
        <img src="about.png" alt="" />
    </div>
    {/* <Page1></Page1> */}
    < Page3></Page3>
    <Showcase></Showcase>
    <div className=' px-24 py-8'>
      <img src="Frame 1149.png" alt="" />
    </div>
    
  <Dashboard></Dashboard>
  <Footer></Footer>
    
    </div>
  )
}

export default About