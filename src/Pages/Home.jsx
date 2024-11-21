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
import OfficeBearers from './Governing Body/OfficeBearers'
import SanobarProfile from './Governing Body/SanobarProfile'
import SaleemProfile from './Governing Body/SaleemProfile'
import MoinProfile from './Governing Body/MoinProfile'
import MohdProfile from './Governing Body/MohdProfile'
import GoverningCommunity from './Governing Body/GoverningCommunity'

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
        {/* <Page2></Page2> */}
        <Dashboard></Dashboard>
        <Footer></Footer>
        
    </div>
    </div>
  )
}

export default Home