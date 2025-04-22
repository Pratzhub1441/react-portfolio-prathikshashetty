import React from 'react';
import about from '../assets/about.jpg'
import { ABOUT_TEXT } from '../constants/index';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from "framer-motion";

const AboutDetails = () => {
  return (
   <>
   <div className="border-b border-neutral-900 pb-4">
    <h1 className="my-20 text-center text-4xl">
      About
      <span className="ml-4 text-neutral-500">Me</span>
    </h1>
    <div className="flex flex-wrap items-start">
      <div className="w-full lg:w-1/2 lg:p-8">
      <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
       className="flex items-center justify-center">
        <img src={about} alt="about" className="rounded-2xl  opacity-60" />
      </motion.div>
      </div>
      <div className="w-full lg:w-1/2">
      <motion.div
       whileInView={{ opacity: 1, x: 0 }}
       initial={{ opacity: 0, x: 100 }}
       transition={{ duration: 1.5 }}
       className="flex justify-start lg:justify-start mt-6">
      <Typewriter
    words={[ABOUT_TEXT]}
    loop={false}
    cursor
    cursorStyle=""
    typeSpeed={4}
    deleteSpeed={0}
    delaySpeed={10000}
  />
      </motion.div>
      </div>
    </div>
   </div>
   </>
  )
}

export default AboutDetails