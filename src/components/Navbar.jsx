import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react'; //

const navLinks = ["About Me", "Skills & Tools", "Experience", "Projects"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full bg-[#0f172a]/90 backdrop-blur-sm shadow-md z-50"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center text-white">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-white"
        >
          E.P Portfolio
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
              whileHover={{ scale: 1.05 }}
              className="text-gray-300 hover:text-blue-400 font-medium transition-colors"
            >
              {link}
            </motion.a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-[#0f172a] text-white px-6 py-4 space-y-4"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                className="block text-gray-300 hover:text-blue-400 font-medium transition"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

