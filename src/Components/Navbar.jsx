import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black bg-opacity-30 fixed top-0 left-1/2 transform -translate-x-1/2 z-50 shadow-md rounded-full max-w-[800px] w-full">
      <div className="px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="text-white text-2xl font-bold">
              ZNORM Homes
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-white hover:text-gray-300 transition duration-300">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-gray-300 transition duration-300">
              About
            </Link>
            <Link to="/gallery" className="text-white hover:text-gray-300 transition duration-300">
              Gallery
            </Link>
            <Link to="/contact" className="text-white hover:text-gray-300 transition duration-300">
              Contact
            </Link>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-400 rounded-b-lg">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link to="/" className="block text-white hover:text-gray-300 transition duration-300">
              Home
            </Link>
            <Link to="/about" className="block text-white hover:text-gray-300 transition duration-300">
              About
            </Link>
            <Link to="/gallery" className="block text-white hover:text-gray-300 transition duration-300">
              Gallery
            </Link>
            <Link to="/contact" className="block text-white hover:text-gray-300 transition duration-300">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
