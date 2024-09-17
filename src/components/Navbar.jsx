import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <Link to="/" className="text-white mr-4">Home</Link>
        <Link to="/about" className="text-white mr-4">About</Link>
        <Link to="/contact" className="text-white">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
