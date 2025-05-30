import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Footer from './components/Footer'
import FAQs from './components/FAQs'
import Services from './components/Services'

function App() {


  return (
    <>
    <Nav/>
   <Hero/>
   <Services/>
   <FAQs/>
   <Footer/>
    </>
  )
}

export default App
