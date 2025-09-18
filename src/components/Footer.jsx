// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-yellow-700 text-white py-10 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        
        {/* Logo & About */}
        <div className="flex flex-col gap-3">
          <h4 className="text-2xl font-bold mb-1">
            <span className="text-yellow-100">Ridhi-Sidhi</span> Consultancy
          </h4>
          <p className="text-yellow-100">
            Luxury interiors that inspire and elevate living.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-3">
            <a
              href="https://www.facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-600 transition"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/riddhi.siddhi_consultancy?igsh=eW1kdHJxOGZzYm43/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-pink-500 transition"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://wa.me/message/JYBNLNQQABYNM1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-green-500 transition"
            >
              <MessageSquare size={20} />
            </a>
            <a
              href="https://twitter.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-sky-500 transition"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-yellow-100">
            <li>
              <Link to="/about" className="hover:text-white transition">About Us</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white transition">Services</Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-white transition">Projects</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact</h4>
          <p className="text-yellow-100">📍 D-91, Indra Nagar, Opp. BSNL Office Near Mandawa Mode, Jhunjhunu (Raj.)</p>
          <p className="text-yellow-100">
            📞 <a href="tel:+919876543210" className="hover:text-white">+91 9314210149 , +91 9785195528</a>
          </p>
          <p className="text-yellow-100">
            ✉ <a href="mailto:contact@ridhi-sidhi.com" className="hover:text-white">riddhisiddhiconsultancy907@gmail.com</a>
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8 text-yellow-200 text-sm">
        © {new Date().getFullYear()} Ridhi-Siddhi Consultancy. All Rights Reserved. <br /> Designed & Developed By Infinite Graphic Storage
      </div>
    </footer>
  );
}
