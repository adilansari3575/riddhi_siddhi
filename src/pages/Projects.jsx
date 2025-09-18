// src/pages/Projects.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Muscat Project",
      desc: "Oman",
      img: "/musqat.jpg",
    },
    {
      id: 2,
      title: "Chandranath ashram bagar",
      desc: "Bagar Jhunhjunu",
      img: "/mahal.jpg",
    },
    {
      id: 3,
      title: "Dhukia Nursing College",
      desc: "Malsisar Raod Jhunjhunu",
      img: "/officewithchair.jpg",
    },
    {
      id: 4,
      title: "Sun-shine Resort",
      desc: "Mandrella Bypass Jhunjhunu",
      img: "/resort.jpg",
    },
    {
      id: 5,
      title: "R.D. Memorial School",
      desc: "Village Natas Tehsil Udaipurwati",
      img: "/schoolnatas.jpg",
    },
    {
      id: 6,
      title: "Shree Shyam Kripa Kunj",
      desc: "Road-No.2 Maan Nagar Jhunjhunu",
      img: "/shreeshayam.jpg",
    },
  ];

  return (
    <div className="bg-white text-gray-900 mt-20">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/officewithchair.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center text-white px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Projects</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Delivering excellence with every design — from luxury homes to corporate spaces.
          </p>
        </div>
      </section>

      {/* Projects Swiper */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-yellow-600 text-center mb-12">
         Our Projects
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-500">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center px-4">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-2">{project.title}</h3>
                  <p className="text-white">{project.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585152939-4c7a4b35cba8?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-3xl mx-auto text-center text-white px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to Start Your Dream Project?</h2>
          <p className="mb-6 text-lg">
            From concept to completion — we craft interiors that define luxury.
          </p>
          <a
            href="/contact"
            className="bg-yellow-500 hover:bg-yellow-600 px-8 py-3 rounded-lg font-semibold transition"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
