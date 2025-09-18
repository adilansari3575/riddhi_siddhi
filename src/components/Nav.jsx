// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-lg shadow-md">
      <div className="max-w-8xl mx-auto flex justify-between items-center px-8 py-1"> {/* 🔹 slightly smaller height */}
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Riddhi Siddhi Consultancy"
            className="h-16 md:h-20 object-contain" // 🔹 reduced height slightly
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-10 text-white font-semibold text-lg">
          <Link to="/" className="hover:text-yellow-500 transition">Home</Link>
          <Link to="/about" className="hover:text-yellow-500 transition">About</Link>
          <Link to="/services" className="hover:text-yellow-500 transition">Services</Link>
          <Link to="/projects" className="hover:text-yellow-500 transition">Projects</Link>
          <Link to="/contact" className="hover:text-yellow-500 transition">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg text-white px-6 py-4 space-y-4 text-lg">
          <Link to="/" onClick={() => setOpen(false)} className="block hover:text-yellow-500">Home</Link>
          <Link to="/about" onClick={() => setOpen(false)} className="block hover:text-yellow-500">About</Link>
          <Link to="/services" onClick={() => setOpen(false)} className="block hover:text-yellow-500">Services</Link>
          <Link to="/projects" onClick={() => setOpen(false)} className="block hover:text-yellow-500">Projects</Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="block hover:text-yellow-500">Contact</Link>
        </div>
      )}
    </header>
  );
}
