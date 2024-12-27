import React from 'react'
import Footer from './Footer'
import Contact from './Contact'
import Review from './Review'
import Achievements from './Achievements'
import Gallery from './Gallery'
import About from './About'
import Features from './Features'
import Banner from '../Components/Banner'
import Navbar from '../Components/Navbar'

const Home = () => {
  return (
    <div>
    <Navbar/>
    <Banner />
    <Features />
    <About />
    <Gallery/>
    <Achievements />
    <Review />
    <Contact />
    
    <Footer />
    </div>
  )
}

export default Home