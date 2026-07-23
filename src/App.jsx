import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Skills from './components/Skill/Skills'
import Projects from './components/Projects/Projects'
import About_me from './components/About_me/About_me'
import Contact from './components/Contact/Contact'

function App() {


  return (
    <>
      <section >
        <div className="app-container">
          <div className="nav-container">
            <Navbar />
          </div>
          <div className="page-container">
            <Home />
            <Skills />
            <Projects />
            <About_me />
            <Contact />
          </div>
        </div>


      </section>


    </>
  )
}

export default App
