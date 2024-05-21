import React from 'react';
import { Navbar } from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Experience />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}