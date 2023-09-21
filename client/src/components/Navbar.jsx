"use client";
import React, { useState } from "react";
import { ImExit } from "react-icons/im";
import logo from "../assets/logo.svg"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`fixed top-0 p-4 w-full font-bold bg-[#ea3883] z-50 ${
        menuOpen ? "h-screen" : "h-auto"
      }`}
      style={{
        background: 'linear-gradient(to right, #abdafb, #1e2ae6)',
      }}
    >
      <div className="max-w-6xl h-16 mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-2xl font-semibold ml-4">
          <img src={logo} alt="logo" className="w-16 h-16" />
        </a>
        <div
          className={`hidden md:flex space-x-4 ${
            menuOpen ? "hidden" : ""
          } transition-opacity duration-300 ease-in-out`}
        >
          <a href="/" className="text-white text-xl hover:underline">
            Home
          </a>
          <a href="/" className="text-white text-xl hover:underline">
            About
          </a>
          <a href="/" className="text-white text-xl hover:underline">
            Cars
          </a>
          <a href="/" className="text-white text-xl hover:underline">
            Rentals
          </a>
          <a href="" className="text-white text-xl hover:underline">
            Contact
          </a>

          <button
            onClick=""
            className="flex flex-row justify-around text-white text-xl hover:underline"
          >
            Sign out<ImExit className="m-1 mx-2" />
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
        <div className="flex flex-col justify-center my-16 items-center md:hidden bg-[#ea3883] space-y-4 transition-opacity duration-1000 ease-in-out">
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
