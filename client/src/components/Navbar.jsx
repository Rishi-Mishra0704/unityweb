"use client";
import React, { useState } from "react";
import { ImExit } from "react-icons/im";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`fixed top-0 w-full bg-[#4d79ff] z-50 ${
        menuOpen ? "h-screen" : "h-auto"
      }`}
    >
      <div className="max-w-6xl h-16 mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-2xl font-semibold ml-4">
          Logo
        </a>
        <div
          className={`hidden md:flex space-x-4 ${
            menuOpen ? "hidden" : ""
          } transition-opacity duration-300 ease-in-out`}
        >
          <a href="/" className="text-white text-lg hover:underline">
            Home
          </a>
          <a href="/" className="text-white text-lg hover:underline">
            About
          </a>
          <a href="/" className="text-white text-lg hover:underline">
            Cars
          </a>
          <a href="/" className="text-white text-lg hover:underline">
            Rentals
          </a>
          <a href="" className="text-white text-lg hover:underline">
            Contact
          </a>

          <button
            onClick=""
            className="flex flex-row justify-around text-white text-lg hover:underline"
          >
            Sign out
          </button>
        </div>
        <div className="md:hidden mr-4">
          <button className="text-white" onClick={toggleMenu}>
            <svg
              className={`w-6 h-6 ${
                menuOpen ? "hidden" : ""
              } transition-opacity duration-300 ease-in-out`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              className={`w-6 h-6 ${
                menuOpen ? "" : "hidden"
              } transition-opacity duration-300 ease-in-out`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="flex flex-col justify-center my-16 items-center md:hidden bg-[#4d79ff] space-y-4 transition-opacity duration-1000 ease-in-out">
          <a
            href="/"
            className="block text-white p-2 text-3xl hover:bg-[#3c64e1]"
          >
            Home
          </a>
          <a
            href="/"
            className="block text-white p-2 text-3xl  hover:bg-[#3c64e1]"
          >
            About
          </a>
          <a
            href="/"
            className="block text-white p-2 text-3xl hover:bg-[#3c64e1]"
          >
            Cars
          </a>
          <a
            href="/"
            className="block text-white text-3xl hover:underline"
          >
            Rentals
          </a>
          <a
            href="/"
            className="block text-white p-2 text-3xl  hover:bg-[#3c64e1]"
          >
            Contact
          </a>
          <button
            onClick=""
            className="flex flex-row justify-around text-white text-3xl hover:underline ml-1"
          >
            Sign out <ImExit className="m-1 mx-2" />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
