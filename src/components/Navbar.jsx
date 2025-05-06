import React, { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { motion } from "framer-motion";

const Navbar = () => {

  const downloadResume = () => {
    const resumeUrl = 'https://drive.google.com/uc?export=download&id=1Y4IQ-pEBe12LEWwHqQbaZBxj7bwT3c-g';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'PrathikshaShetty.pdf';
    link.click();
  };

  
  return (
   <>
   <motion.nav
    whileInView={{opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: -100 }}
    transition={{ duration: 1 }}
    className='mb-10 flex items-center justify-between p-6'>
    <div className='flex flex-shrink-0 items-center text-[60px] font-medium gap-8'>
    Ps
    <button
            onClick={downloadResume}
            className="bg-transparent text-white py-2 px-4 rounded hover:bg-neutral-800 text-sm transition-all mt-2"
            style={{ 
              border: '0.1px solid rgba(255, 255, 255, 0.4)',
             }}
          >
            Download Resume
          </button>
    </div>
    <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
    <a href="https://www.linkedin.com/in/prathiksha15" target="_blank"><FaLinkedin /></a>
    </div>
   </motion.nav>
   </>
  )
}

export default Navbar