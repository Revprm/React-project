import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = (
    <>
      <Link to="/" className="block text-white mb-2 md:mb-0 md:mr-4">Home</Link>
      <Link to="/deals" className="block text-white mb-2 md:mb-0 md:mr-4">Deals</Link>
      <Link to="/about" className="block text-white mb-2 md:mb-0 md:mr-4">About</Link>
      <Link to="/contact" className="block text-white mb-2 md:mb-0 md:mr-4">Contact</Link>
      <Link to="/notes" className="block text-white mb-2 md:mb-0">Notes</Link>
    </>
  );

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src="/icon.png" alt="Logo" className="h-8" />
        </Link>

        {/* Hamburger Icon */}
        <div className="md:hidden" onClick={toggleMenu}>
          <button className={`text-white focus:outline-none transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
            {isOpen ? 'X' : '☰'}
          </button>
        </div>

        {/* Navbar Links */}
        <div className={`md:flex md:items-center ${isOpen ? 'hidden' : 'hidden'} md:block`}>
          {navLinks}
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden bg-gray-700 mt-3 p-4 transition-all duration-450 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        {navLinks}
      </div>
    </nav>
  );
};

export default Navbar;
