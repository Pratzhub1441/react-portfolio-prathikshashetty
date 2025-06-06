import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutDetails from './components/AboutDetails';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contacts from './components/Contacts';

const App = () => {
  return (
    <div className='relative overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 min-h-screen'>
      <div className="fixed top-0 left-0 -z-10 h-full w-full"></div>
      <div className="absolute top-0 left-0 z-[-2] h-full w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <AboutDetails />
        <Technologies />
        <Experience />
        <Projects />
        <Contacts />
      </div>
    </div>
  );
};

export default App;
