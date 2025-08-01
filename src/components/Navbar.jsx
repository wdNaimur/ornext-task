import React, { useState } from "react";
import { CiUser } from "react-icons/ci";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Home", "Services", "Pricing", "Works", "Blog", "About Us"];

  return (
    <>
      <nav className="w-full px-4 py-4 shadow-md bg-black/40 z-20 fixed backdrop-blur-2xl">
        <div className="container max-w-6xl mx-auto flex items-center justify-between text-base-100">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Logo" className="h-9 w-9 object-cover" />
            <span className="font-goodly text-3xl">ornext</span>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link, index) => (
              <li key={index} className="cursor-pointer hover:text-base-200">
                <span
                  className={
                    link === "Home"
                      ? "border-b-2 border-primary-500"
                      : "border-none"
                  }
                >
                  {link}
                </span>
              </li>
            ))}
          </ul>

          {/* Login and Hamburger */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4 text-sm cursor-pointer hover:text-base-200 transition-all">
              <span>log in</span>
              <CiUser className="text-xl opacity-60" />
            </div>

            {/* Hamburger Icon */}
            <button
              className="md:hidden text-base-100 text-xl cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed pt-4 top-17 left-0 px-4 space-y-4 text-sm font-medium duration-300 w-screen h-screen bg-black/25 backdrop-blur-2xl z-50 transition-all">
          {navLinks.map((link) => (
            <div
              key={link}
              className={`block py-1 border-b border-white/10 ${
                link === "Home" ? "text-blue-400" : "text-white"
              }`}
            >
              {link}
            </div>
          ))}
          <div className="flex gap-2 items-center text-white pt-2">
            <FaUser className="h-4 w-4" />
            <span>log in</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
