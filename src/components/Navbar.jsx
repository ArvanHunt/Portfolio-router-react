import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-950 text-teal-300 py-4">
      <div className="container mx-auto flex justify-end space-x-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "hover:shadow-lg rounded-lg p-2 hover:shadow-blue-500 transition duration-300 font-mono text-teal-100"
              : "hover:shadow-lg rounded-lg p-2 hover:shadow-blue-500 transition duration-300 font-mono"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "hover:shadow-lg rounded-lg p-2  hover:shadow-blue-500 transition duration-300 font-mono text-teal-100"
              : "hover:shadow-lg rounded-lg p-2 hover:shadow-blue-500 transition duration-300 font-mono"
          }
        >
          About
        </NavLink>
        {/* <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "hover:shadow-lg rounded-lg p-2 hover:shadow-blue-500 transition duration-300 font-mono text-teal-100"
              : "hover:shadow-lg rounded-lg p-2 hover:shadow-blue-500 transition duration-300 font-mono"
          }
        >
          Contact Me
        </NavLink> */}
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "hover:shadow-lg rounded-lg p-2 hover:shadow-blue-500 transition duration-300 font-mono text-teal-100"
              : "hover:shadow-lg rounded-lg p-2 hover:shadow-blue-500 transition duration-300 font-mono"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/hireme"
          className={({ isActive }) =>
            isActive
              ? "hover:shadow-lg rounded-lg p-2 hover:shadow-blue-500 transition duration-300 border-2 pr-9 pl-9 text-teal-100 border-teal-100 rounded-md text-xs font-mono"
              : "hover:shadow-lg rounded-lg p-2 hover:shadow-blue-500 transition duration-300 border-2 pr-9 pl-9 text-teal-300 border-teal-300 rounded-md text-xs font-mono"
          }
        >
          Hire Me
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
