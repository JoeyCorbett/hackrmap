import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const location = useLocation(); // Obtener la ubicación actual

  const handleToggleNavbar = () => {
    setIsNavBarOpen(!isNavBarOpen);
  };

  const getLinkClass = (path) => {
    // Si el path coincide con la ubicación actual, aplicar un estilo diferente
    return location.pathname === path
      ? 'block py-2 px-4 rounded bg-gray-600 text-white'
      : 'block py-2 px-4 rounded hover:bg-gray-600 hover:text-white transition-colors duration-300 ease-in-out transform hover:scale-105';
  };

  return (
    <div>
      {/* Menu Button */}
      <button
        onClick={handleToggleNavbar}
        className={`absolute top-4 left-4 w-10 h-10 bg-transparent p-2 rounded-lg text-white text-lg z-10 border border-white flex items-center justify-center ${isNavBarOpen ? 'hidden' : ''}`}
      >
        ☰
      </button>

      {/* Navbar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-gray-200 transform ${isNavBarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-500 ease-in-out z-50`}>
        <div className="flex flex-row bg-gray-900 justify-between pr-3 pt-3">
          <div className="text-xl font-bold p-4 text-center">
            Navigation
          </div>
          <button
            onClick={handleToggleNavbar}
            className="text-white text-2xl"
          >
            X
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-2 space-y-2">
          <Link to="/dashboard" className={getLinkClass('/dashboard')}>
            Dashboard
          </Link>
          <Link to="/manageproject" className={getLinkClass('/manageproject')}>
            Manage Projects
          </Link>
          <Link to="/form" className={getLinkClass('/form')}>
            Back to Form
          </Link>
          <Link to="/learnmore" className={getLinkClass('/learnmore')}>
            Learn More
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

