import React from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Pages/Banner'
import Testinomial from '../Pages/Testinomial'
import Page1 from '../Pages/Page1'
import Showcase from '../Pages/Showcase'
import RecentCauses from '../Pages/RecentCauses'
import Page2 from '../Pages/Page2'
import Footer from '../Pages/Footer'
import Dashboard from '../Pages/Dashboard'

const Home = () => {
  return (

    <div>
      <div className=' w-full h-screen '>
        <Navbar></Navbar>
        <Banner></Banner>
        <Testinomial></Testinomial>
        <Page1></Page1>
        <Showcase></Showcase>
        <RecentCauses></RecentCauses>
        <Page2></Page2>
        <Dashboard></Dashboard>
        <Footer></Footer>
    </div>
    </div>
  )
}

export default Home