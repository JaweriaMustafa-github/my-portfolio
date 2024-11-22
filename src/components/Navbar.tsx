'use client';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  // State to toggle the navbar visibility on mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center p-5 bg-black bg-opacity-50 z-50">
      {/* Logo */}
      <div className="text-2xl font-extrabold text-gradient">
        <h1>My Portfolio</h1>
      </div>
      <h3 className='text-xl font-serif font-bold text-gradient content-center text-center hidden sm:block '>JM</h3>

      {/* Hamburger Button for Mobile */}
      <button
        className="md:hidden text-3xl hover:text-pink-500 text-white focus:outline-none"
        onClick={toggleMenu}
      >
        {isMenuOpen ? '✖' : '☰'} {/* Toggle between "X" and hamburger icon */}
      </button>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-6 text-lg">
        <Link href="#about" className="hover:text-pink-400 hover:scale-105 transition-transform duration-300 ease-in-out hover:font-bold">
          About
        </Link>
        <Link href="#skills" className="hover:text-pink-400 hover:scale-105 transition-transform duration-300 ease-in-out hover:font-bold">
          Skills
        </Link>
        <Link href="#projects" className="hover:text-pink-400 hover:scale-105 transition-transform duration-300 ease-in-out hover:font-bold">
          Projects
        </Link>
        <Link href="#contact" className="hover:text-pink-400 hover:scale-105 transition-transform duration-300 ease-in-out hover:font-bold">
          Contact
        </Link>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-black bg-opacity-90 text-center transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'block' : 'hidden'
        } md:hidden`}
      >
        <Link
          href="#about"
          className="block py-3 hover:text-pink-400 hover:scale-105 transition-transform duration-300 ease-in-out "
          onClick={toggleMenu}
        >
          About
        </Link>
        <Link
          href="#skills"
          className="block py-3 hover:text-pink-400 hover:scale-105 transition-transform duration-300 ease-in-out"
          onClick={toggleMenu}
        >
          Skills
        </Link>
        <Link
          href="#projects"
          className="block py-3 hover:text-pink-400 hover:scale-105 transition-transform duration-300 ease-in-out"
          onClick={toggleMenu}
        >
          Projects
        </Link>
        <Link
          href="#contact"
          className="block py-3 hover:text-pink-400 hover:scale-105 transition-transform duration-300 ease-in-out"
          onClick={toggleMenu}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;