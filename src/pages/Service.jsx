// src/pages/Services.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Crown, Star, Diamond, Award } from "lucide-react";

export default function Services() {
  return (
    <div className="bg-white text-gray-900">
      {/* ✅ Hero Section */}
      <section
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/ridhisidhi.png.jpg')", // ✅ public folder image
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative text-center text-white px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Our <span className="text-yellow-400">Premium Services</span>
          </h1>
          <p className="text-lg md:text-xl">
            Redefining luxury interiors with elegance, precision, and innovation
          </p>
        </div>
      </section>

      {/* ✅ Services Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-yellow-600 text-center mb-12">
          Explore Our Expertise
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "M.E.P. Services",
              desc: "Tailor-made luxury spaces that reflect sophistication and class.",
              icon: <Diamond className="w-10 h-10 text-yellow-500" />,
            },
            {
              title: "3D View",
              desc: "Handpicked global luxury furniture to elevate your interiors.",
              icon: <Crown className="w-10 h-10 text-yellow-500" />,
            },
            {
              title: "Vastu Consultant",
              desc: "Integrating technology seamlessly for modern lifestyle needs.",
              icon: <Star className="w-10 h-10 text-yellow-500" />,
            },
          ].map((service, i) => (
            <div
              key={i}
              className="p-10 bg-white border border-yellow-100 rounded-2xl shadow-lg hover:shadow-2xl text-center transition transform hover:-translate-y-2"
            >
              <div className="mb-6 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-yellow-600 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Premium Package Highlight */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-yellow-600 mb-8">
            Our Premium Package
          </h2>
          <div className="bg-white rounded-2xl shadow-xl p-10 md:flex items-center gap-12">
            <img
              src="/ridhisidhi2.pmg.jpg"
              alt="Premium"
              className="w-full md:w-1/2 rounded-xl shadow-lg object-cover"
            />
            <div className="md:w-1/2 text-left mt-6 md:mt-0">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Award className="text-yellow-500" /> Exclusive Benefits
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>
                  ✔️ <strong>Expert Design Solutions:</strong> Over 25 years of
                  creating stunning interiors that blend style, comfort, and
                  functionality.
                </li>
                <li>
                  ✔️ <strong>Personalized Spaces:</strong> Every project is
                  uniquely tailored to reflect your personality, lifestyle, and
                  vision.
                </li>
                <li>
                  ✔️ <strong>Innovative Concepts:</strong> We transform ordinary
                  spaces into extraordinary experiences with creative layouts
                  and smart design.
                </li>
                <li>
                  ✔️ <strong>Attention to Detail:</strong> From lighting to
                  furniture placement, every element is thoughtfully designed
                  for elegance and harmony.
                </li>
                <li>
                  ✔️ <strong>Seamless Execution:</strong> End-to-end interior
                  design management ensures your dream space is delivered on
                  time and stress-free.
                </li>
              </ul>

              <Link
                to="/contact"
                className="mt-6 inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                Get Premium Access
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Testimonials Section */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-yellow-600 text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Ananya Gupta",
              review:
                "Their premium design services completely transformed my home. It feels like a 5-star luxury hotel now!",
            },
            {
              name: "Rahul Verma",
              review:
                "From consultation to execution, everything was top-notch. Highly recommend their premium package!",
            },
            {
              name: "Sophia Khan",
              review:
                "The attention to detail and elegance in their designs is unmatched. Truly premium!",
            },
          ].map((testimonial, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md p-6 border border-yellow-100 hover:shadow-xl transition"
            >
              <p className="text-gray-600 mb-4">“{testimonial.review}”</p>
              <h4 className="text-lg font-semibold text-yellow-600">
                {testimonial.name}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Call to Action */}
      <section
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/cta-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative text-center text-white max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience Luxury Like Never Before
          </h2>
          <p className="mb-6 text-lg">
            Upgrade to our premium services and transform your lifestyle.
          </p>
          <Link
            to="/contact"
            className="bg-yellow-500 hover:bg-yellow-600 px-8 py-3 rounded-lg font-semibold transition"
          >
            Start Your Premium Journey
          </Link>
        </div>
      </section>
    </div>
  );
}
