
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'



const LayoutLandingPage = () => {
  return (
    <div>
        <Navbar />
        
        <Outlet />

        <Footer />
      
    </div>
  )
}

export default LayoutLandingPage
