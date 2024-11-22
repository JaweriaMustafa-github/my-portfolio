'use client';
import Link from 'next/link';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <h1>My Portfolio</h1>
      </div>
      <h3 className="navbar-shortcut hidden-sm">JM</h3>

      {/* Hamburger Button for Mobile */}
      <button className="navbar-toggle-btn" onClick={toggleMenu}>
        {isMenuOpen ? '✖' : '☰'}
      </button>

      {/* Desktop Navigation */}
      <div className="navbar-links hidden-md">
        <Link href="#about" className="navbar-link" onClick={toggleMenu}>
          About
        </Link>
        <Link href="#skills" className="navbar-link" onClick={toggleMenu}>
          Skills
        </Link>
        <Link href="#projects" className="navbar-link" onClick={toggleMenu}>
          Projects
        </Link>
        <Link href="#contact" className="navbar-link" onClick={toggleMenu}>
          Contact
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
        <Link href="#about" className="mobile-link" onClick={toggleMenu}>
          About
        </Link>
        <Link href="#skills" className="mobile-link" onClick={toggleMenu}>
          Skills
        </Link>
        <Link href="#projects" className="mobile-link" onClick={toggleMenu}>
          Projects
        </Link>
        <Link href="#contact" className="mobile-link" onClick={toggleMenu}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;