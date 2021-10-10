import React from 'react'
import '../styles/landingPage.css'
import About from './about'
import Feature from './feature'
import Footer from './footer'
import Header from './header'
import Home from './home'

function LandingPage() {
    return (
        <div className="landingPage">
            <Header/>
            <Home/>
            <About/>
            <Feature/>
            <Footer/>
        </div>
    )
}

export default LandingPage
