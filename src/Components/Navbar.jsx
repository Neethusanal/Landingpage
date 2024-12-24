import React, { useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=" bg-gray-800 bg-opacity-30 absolute top-5 left-1/2 transform -translate-x-1/2 z-50 shadow-md rounded-full max-w-[800px] w-full">
    <div className="px-6 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="text-white text-2xl font-bold">
         ZNORM Homes
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a
            href="#home"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            About
          </a>
          <a
            href="#services"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Contact
          </a>
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
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
          <a
            href="#home"
            className="block text-white hover:text-gray-300 transition duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="block text-white hover:text-gray-300 transition duration-300"
          >
            About
          </a>
          <a
            href="#services"
            className="block text-white hover:text-gray-300 transition duration-300"
          >
            Services
          </a>
          <a
            href="#contact"
            className="block text-white hover:text-gray-300 transition duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    )}
  </nav>
  )
}

export default Navbar