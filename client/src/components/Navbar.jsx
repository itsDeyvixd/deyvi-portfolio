import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Lógica para detectar el scroll y cambiar el estado de la barra
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Definición de las secciones de tu portafolio
  const links = ['About', 'Projects', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-5 transition-all duration-300 ${
        scrolled ? 'bg-ink/95 backdrop-blur-sm border-b border-white/5' : 'bg-transparent'
      }`}
    >
      {/* Logo */}
      <span className="font-dela text-2xl tracking-widest text-paper">
        DEYVI<span className="text-red">.</span>
      </span>

      {/* Menú de navegación */}
      <div className="flex gap-8">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-ash text-xs tracking-widest uppercase hover:text-red transition-colors duration-200"
          >
            {link}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}