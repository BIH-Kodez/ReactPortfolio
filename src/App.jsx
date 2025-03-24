import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer'


function App() {

  return (
    <div className="bg-[#0f172a] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );

}

export default App
