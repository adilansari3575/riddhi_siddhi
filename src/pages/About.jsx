// src/pages/About.jsx
import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick"; // ✅ Import Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function About() {
  const teamMembers = [
    {
      name: "Dr. Rasheed",
      role: "Lead Designer",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Dr. KUNDAN SINGH",
      role: "Creative Head",
      img: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
      name: "Mr. RAJKUMAR JI",
      role: "Project Manager",
      img: "https://randomuser.me/api/portraits/men/47.jpg",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Number of slides to show on desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // mobile breakpoint
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/aboutbg.png')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center text-white px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            About <span className="text-yellow-400">𝑹𝒊𝒅𝒉𝒊-𝑺𝒊𝒅𝒉𝒊</span>
          </h1>
          <p className="text-lg md:text-xl">
            Crafting timeless luxury interiors that inspire living
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <img
          src="/oxferd.png.jpg"
          alt="Our Story"
          className="rounded-xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold text-yellow-600 mb-4">
            Who We Are
          </h2>
          <p className="text-gray-600 mb-6">
            Riddhi Siddhi Consultancy is a trusted name in the field of
            architecture, design, and construction consultancy, committed to
            delivering innovative, functional, and elegant solutions for every
            project. Who We Are – we are a team of skilled professionals and
            creative minds who believe in blending modern design with practical
            usability, ensuring every space reflects both vision and purpose.
            Our services include Architecture Planning, crafting unique and
            efficient layouts; Structure Designing, ensuring durability and
            safety; Interior Designing, curating stylish and customized living
            and working spaces; and 3D Views, offering realistic previews of
            concepts. We also specialize in M.E.P. Services for flawless
            technical integration and Vastu Consultation to align designs with
            harmony and positive energy. At Riddhi Siddhi Consultancy, we don’t
            just design spaces—we create environments that inspire, function
            seamlessly, and stand the test of time.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
          {[
            { number: "15+", label: "Years Experience" },
            { number: "500+", label: "Projects Completed" },
            { number: "50+", label: "Expert Designers" },
            { number: "100%", label: "Client Satisfaction" },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-3xl font-bold text-yellow-600">
                {stat.number}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-yellow-600 text-center mb-12">
          Why Choose Ridhi-Sidhi ?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Personalized Designs",
              desc: "Every project is tailored to reflect your unique taste and lifestyle.",
              icon: "🎨",
            },
            {
              title: "Luxury Materials",
              desc: "We source only the finest materials to ensure unmatched quality.",
              icon: "🏛️",
            },
            {
              title: "Expert Team",
              desc: "Our award-winning designers bring creativity and expertise together.",
              icon: "⭐",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow hover:shadow-xl border border-yellow-100 text-center"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-yellow-600 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section with Slider */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-yellow-600 text-center mb-12">
            Meet Our Team
          </h2>

          <Slider
            dots={true} // show dots
            infinite={true} // infinite loop
            speed={800} // transition speed
            slidesToShow={1} // show 1 slide at a time for fade effect
            slidesToScroll={1}
            autoplay={true} // autoplay enabled
            autoplaySpeed={2000} // 3s per slide
            fade={true} // fade effect
            arrows={true} // show next/prev arrows
            responsive={[
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                },
              },
            ]}
          >
            {teamMembers.map((member, i) => (
              <div key={i} className="p-4">
                <div className="bg-white rounded-xl shadow hover:shadow-xl p-6 text-center">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-bold text-yellow-600">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="relative py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/cta-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-3xl mx-auto text-center text-white px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Design Your Dream Space?
          </h2>
          <p className="mb-6 text-lg">
            Let’s bring your vision to life with our team of expert interior
            designers.
          </p>
          <Link
            to="/contact"
            className="bg-yellow-500 hover:bg-yellow-600 px-8 py-3 rounded-lg font-semibold transition"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
