import React from 'react'
import Footer from '../landingPage/footer'
import Profile from '../misc/profile'
import HeroHeader from './heroHeader'
import HeroHome from './heroHome'
import HeroHelp from './helpHero'

function HeroDash() {
  return (
    <div>
      <HeroHeader />
      <HeroHome />
      <HeroHelp />
      <Profile/>
      <Footer />
    </div>
  )
}

export default HeroDash
