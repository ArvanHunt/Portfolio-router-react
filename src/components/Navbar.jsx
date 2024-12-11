import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-lime-400 text-black py-4">
      <div className="container mx-auto flex justify-center space-x-6">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/contact" className="hover:underline">Contact Me</Link>
        <Link to="/Projects" className="hover:underline">Projects</Link>
        <Link to="/hireme" className="hover:underline">Hire Me</Link>
      </div>
    </nav>
  );
}

export default Navbar;