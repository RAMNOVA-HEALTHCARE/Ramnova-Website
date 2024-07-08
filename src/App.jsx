import './App.css'
import React from 'react';
import Appbar from './Components/Appbar'
import Footer from './Components/Footer'
import { BrowserRouter as Router, Routes, Route,useLocation } from 'react-router-dom';
import FocusTrap from '@mui/material/Unstable_TrapFocus';
import Carousal from './Components/Carousal';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import FeatureBox from './Components/FeatureBox';
import Slider from './Components/ProductSlide';
import AboutRamnova from './Components/AboutRamnova';
import Products from './Components/Products';
function App() {

  return (
    <>
      <Router>
        <Appbar/> 
        <Routes>
            <Route path='/' element={<><Carousal/><AboutRamnova/><FeatureBox/><Slider/></>}/>
            <Route path='/home' element={<><Carousal/><AboutRamnova/><FeatureBox/><Slider/></>}/>
            <Route path='/aboutUs'element={<><AboutUs/></>}/>
            <Route path='/products'element={<><Products/></>}/>
            <Route path='/contactUs'element={<><ContactUs/></>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
