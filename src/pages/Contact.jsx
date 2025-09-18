// src/pages/Contact.jsx
import React from "react";

export default function Contact() {
  return (
    <div className="bg-white text-gray-900">
      {/* ✅ Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative text-center text-white px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Get in <span className="text-yellow-400">Touch</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Let’s create timeless luxury spaces together — reach out today.
          </p>
        </div>
      </section>

      {/* ✅ Contact Info + Form */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl font-bold text-yellow-600 mb-6">
            Contact Information
          </h2>
          <p className="text-gray-600 mb-6">
            We’re here to answer your questions and bring your vision to life.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <span className="text-yellow-500 text-2xl">📍</span>
              <p>D-91, Indra Nagar, Opp. BSNL Office Near Mandawa Mode, Jhunjhunu (Raj.) </p>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-yellow-500 text-2xl">📞</span>
              <p>+91 9314210149</p>| <p>+91 9785195528</p>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-yellow-500 text-2xl">✉</span>
              <p>riddhisiddhiconsultancy907@gmail.com</p>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-yellow-600 mb-6">
            Send Us a Message
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 outline-none"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 outline-none"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* ✅ Google Map */}
      <section className="w-full h-[400px]">
        <iframe
          title="map"
          className="w-full h-full rounded-xl shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3518.984310505492!2d75.3867136!3d28.116508800000048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39133944882f487f%3A0xe024a94a6f94ba88!2sRiddhi%20Siddhi%20Consultants!5e0!3m2!1sen!2sin!4v1758173084059!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
}
