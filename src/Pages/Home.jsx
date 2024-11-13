import React from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from './Banner'
import Testinomial from './Testinomial'
import Page1 from './Page1'
import Showcase from './Showcase'
import RecentCauses from './RecentCauses'
import Page2 from './page2'
import Footer from './Footer'
import Dashboard from './Dashboard'

const Home = () => {
  return (

    <div>
      <div className=' w-full  '>
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