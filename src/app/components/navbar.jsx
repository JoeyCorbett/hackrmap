import React, { useState } from "react";
import { Link } from "react-router-dom"; // Only import Link
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const handleToggleNavbar = () => {
    setIsNavBarOpen(!isNavBarOpen);
  };

  return (
    <div className="flex">
    {!isNavBarOpen && (
        <button onClick={handleToggleNavbar}>
          <Menu color="#ffffff"/>
        </button>
    )}
   
      {isNavBarOpen && (
        <div className="flex h-screen bg-gray-100">
          {/* Sidebar */}
          <aside className="w-64 bg-gray-800 text-gray-200 flex flex-col">
            <div className="flex flex-row bg-gray-900 justify-between pr-3 pt-3">
              <div className="text-xl font-bold p-4 text-center">
                Navigation
              </div>
              <button
                onClick={handleToggleNavbar}
                className=""
              >
                <X color="#ffffff" />
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
                to="/learnmore"
                className="block py-2 px-4 rounded hover:bg-gray-700"
              >
                Learn more
              </Link>
              <Link
                to="/form"
                className="block py-2 px-4 rounded hover:bg-gray-700"
              >
                Back to Form
              </Link>
            </nav>
          </aside>
        </div>
      )}
    </div>
  );
};

export default NavBar;
