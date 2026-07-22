import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Skills from './components/Skill/Skills'
import Projects from './components/Projects/Projects'
import About_me from './components/About_me/About_me'
import Contact from './components/Contact/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section >
        <Navbar />
        <Home />
        <Skills />
        <Projects />
        <About_me />
        <Contact />
      </section>


    </>
  )
}

export default App
