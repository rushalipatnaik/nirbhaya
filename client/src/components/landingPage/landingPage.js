import React from 'react'
import '../styles/landingPage.css'
import About from './about'
import Contact from './contact'
import Feature from './feature'
import Footer from './footer'
import Header from './header'
import Home from './home'

function LandingPage() {
    return (
        <div>
            <Header/>
            <Home/>
            <About/>
            <Feature/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default LandingPage
