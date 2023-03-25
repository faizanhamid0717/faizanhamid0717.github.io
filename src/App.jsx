import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar.jsx'
import Hero from './components/hero/Hero.jsx'
import Skills from './components/skills/Skills.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import Footer from './components/footer/Footer.jsx'
import { Project } from './components/projects/Project'
import { AllRoutes } from './components/AllRoutes'
import { Route, Routes } from 'react-router-dom'
import { Github } from './components/github/github'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills /> 
      <Project/>
      <Github/>
      <Contact />
      <Footer />
    </div>
  )
}

export default App
