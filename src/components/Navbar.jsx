import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const RESUME_URL =
    "https://drive.google.com/uc?export=download&id=1LbVMrTPU8Ydjj8jbZTcO59hpkRKQKI7h";

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = RESUME_URL;
    link.download = "PrathikshaShetty-Resume.pdf";
    link.rel = "noopener noreferrer";
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      window.open(RESUME_URL, "_blank", "noopener,noreferrer");
    }, 800);
  };

  return (
    <motion.nav
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1 }}
      className="mb-10 flex items-center justify-between p-6"
    >
      <div className="flex items-center gap-8 text-[60px] font-medium">
        Ps
        <button
          onClick={downloadResume}
          className="bg-transparent text-white py-2 px-4 rounded hover:bg-neutral-800 text-sm transition-all mt-2"
          style={{ border: "0.1px solid rgba(255, 255, 255, 0.4)" }}
        >
          Download Resume
        </button>
      </div>

      <div className="m-8 flex items-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/prathiksha15"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
