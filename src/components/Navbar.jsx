import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const RESUME_URL =
    "https://drive.google.com/file/d/1LbVMrTPU8Ydjj8jbZTcO59hpkRKQKI7h/view?usp=sharing";

  const openResume = () => {
    window.open(RESUME_URL, "_blank");
  };

  return (
    <>
      <motion.nav
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="mb-10 flex items-center justify-between p-6"
      >
        <div className="flex flex-shrink-0 items-center text-[60px] font-medium gap-8">
          Ps
          <button
            onClick={openResume}
            className="bg-transparent text-white py-2 px-4 rounded hover:bg-neutral-800 text-sm transition-all mt-2"
            style={{ border: "0.1px solid rgba(255, 255, 255, 0.4)" }}
          >
            View Resume
          </button>
        </div>

        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a
            href="https://www.linkedin.com/in/prathiksha15"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
