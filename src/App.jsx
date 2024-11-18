import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About/About'
import OfficeBearers from './Pages/Governing Body/OfficeBearers'
import GoverningCommunity from './Pages/Governing Body/GoverningCommunity'
import SaleemProfile from './Pages/Governing Body/SaleemProfile'
import SanobarProfile from './Pages/Governing Body/SanobarProfile'
import MohdProfile from './Pages/Governing Body/MohdProfile'
import MoinProfile from './Pages/Governing Body/MoinProfile'
import EducationGudiance from './Pages/Programs/EducationGudiance'
import SkillDevelopment from './Pages/Programs/SkillDevelopment'
import Scholarship from './Pages/Programs/Scholarship'
import Quresh from './Pages/Programs/Quresh'
import PhotoGallery from './Pages/Gallery/PhotoGallery'
import Membership from './Pages/Membership/Membership'
import ContactUs from './Pages/Conatct us/ContactUs'
import DonateNow from './Pages/Donate Now/DonateNow'

function App() {

  return (
    <>
    <Routes>

     <Route exact path="/" element={<Home></Home>} />
     <Route exact path="/donate" element={<DonateNow></DonateNow>} />
     <Route exact path="/about" element={<About></About>} />
     <Route exact path="/office" element={<OfficeBearers></OfficeBearers>} />
     <Route exact path="/governing" element={<GoverningCommunity></GoverningCommunity>} />
     <Route exact path="/gallery" element={<PhotoGallery></PhotoGallery>} />
     <Route exact path="/saleem" element={<SaleemProfile></SaleemProfile>} />
     <Route exact path="/sanobar" element={<SanobarProfile></SanobarProfile>} />
     <Route exact path="/moin" element={<MoinProfile></MoinProfile>} />
     <Route exact path="/mohd" element={<MohdProfile></MohdProfile>} />
     <Route exact path="/guidance" element={<EducationGudiance></EducationGudiance>} />
     <Route exact path="/skill" element={<SkillDevelopment></SkillDevelopment>} />
     <Route exact path="/scholarship" element={<Scholarship></Scholarship>} />
     <Route exact path="/quresh" element={<Quresh></Quresh>} />
     <Route exact path="/membership" element={<Membership></Membership>} />
     <Route exact path="/contact" element={<ContactUs></ContactUs>} /></Routes>
     
       
      
    </>
  )
}

export default App
