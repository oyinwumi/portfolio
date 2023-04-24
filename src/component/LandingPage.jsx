import React from 'react'
import HeroPage from '../pages/HeroPage';
import About from '../pages/About';
import Skill from '../pages/Skill';
import Project from '../pages/Project';
import Contact from '../pages/Contact';
import Footer from './Footer';
const LandingPage = () => {
  return (
    <div>
    <HeroPage/>
     <About/>
     <Skill/>
     <Project/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default LandingPage