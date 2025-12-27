import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skils from './components/Skills/Skils'
import Service from './components/Service/Service'
import Resume from './components/Resume/Resume'
import Portfolio from './components/Portfolio/Portfoilo' 
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <><div>
    <Navbar />
    <Hero />
    <About/>
    <Skils />
    <Service/>
    <Resume/>
    <Portfolio /> 
    <Contact/>
    <Footer/>
    </div>
    </>
  )
}

export default App


