import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-950 text-teal-300 py-4">
      <div className="container mx-auto flex justify-end space-x-6">
        <Link to="/" className="hover:underline font-mono">Home</Link>
        <Link to="/about" className="hover:underline font-mono">About</Link>
        <Link to="/contact" className="hover:underline font-mono">Contact Me</Link>
        <Link to="/Projects" className="hover:underline font-mono">Projects</Link>
        <Link to="/hireme" className='border-2  py-1 px-7 text-teal-300 border-teal-300 rounded-md text-xs font-mono'>Hire Me</Link>
      </div>
    </nav>
  );
}

export default Navbar;