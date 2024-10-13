import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  const handleToggleNavbar = () => {
    setIsNavBarOpen(!isNavBarOpen);
  };

  return (
    <div>
      <button
        onClick={handleToggleNavbar}
        className={`fixed top-4 left-4 w-10 h-10 bg-transparent p-2 rounded-lg text-white text-lg z-10 border border-white flex items-center justify-center ${isNavBarOpen ? 'hidden' : ''}`}
      >
        ☰
      </button>

      {isNavBarOpen && (
        <div className="flex h-screen bg-red-100">
          {/* Sidebar */}
          <aside className="w-64 bg-gray-800 text-gray-200 flex flex-col">
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

            <nav className="flex-1 px-4 py-2 space-y-2">
              <Link
                to="/dashboard"
                className="block py-2 px-4 rounded hover:bg-gray-700"
              >
                Dashboard
              </Link>
              <Link
                to="/manageproject"
                className="block py-2 px-4 rounded hover:bg-gray-700"
              >
                Manage Projects
              </Link>
              <Link
                to="/form"
                className="block py-2 px-4 rounded hover:bg-gray-700"
              >
                Back to Form
              </Link>
              <Link
                to="/LearnMore"
                className="block py-2 px-4 rounded hover:bg-gray-700"
              >
                Learn More
              </Link>
            </nav>
          </aside>
        </div>
      )}
    </div>
  );
};

export default Navbar;