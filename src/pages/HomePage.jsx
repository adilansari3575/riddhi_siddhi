// src/pages/HomePage.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// ✅ Projects Data
const projects = [
  {
    id: 1,
    title: "Modern Living Room",
    description: "A luxury living room design with modern aesthetics.",
    image: "/Modern Workspace.jpg",
  },
  {
    id: 2,
    title: "Elegant Office Space",
    description: "Office space with functionality and elegance.",
    image: "/livingrooom.jpg",
  },
  {
    id: 3,
    title: "Luxury Bedroom",
    description: "Bedroom interior with a touch of royalty and comfort.",
    image: "/Luxury Bedroom.jpg",
  },
];

// Framer Motion Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function HomePage() {
  return (
    <div className="bg-white text-gray-900">
      {/* ✅ Hero Section */}
      <section
        className="relative h-[85vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/aboutbg.png')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeInUp}
          className="relative text-center text-white z-10 px-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Welcome to <span className="text-yellow-400">Ridhi-Sidhi</span>{" "}
            Consultancy
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
            Luxury interiors that blend creativity, functionality and timeless
            elegance.
          </p>
          <Link
            to="/contact"
            className="px-6 py-3 bg-yellow-500 text-white rounded-full font-semibold hover:bg-yellow-600 transition"
          >
            Get in Touch
          </Link>
        </motion.div>
      </section>

      {/* ✅ About Preview */}
      <section className="py-16 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-yellow-600 font-semibold">About Us</span>
          </h2>
          <p className="text-gray-700 mb-6">
            At <b>Ridhi-Sidhi</b>, Consultancy, is a professional firm dedicated
            to delivering innovative, practical, and aesthetically appealing
            solutions in the field of design and construction. We specialize in
            a wide range of services, including Architecture Planning, where
            creativity meets functionality to craft efficient spaces; Structure
            Designing, ensuring strength and stability with precision
            engineering; Interior Designing, creating elegant, modern, and
            customized interiors; and 3D Views, providing realistic
            visualizations to bring concepts to life before execution. Along
            with this, we offer M.E.P. (Mechanical, Electrical, and Plumbing)
            Services, ensuring seamless technical integration for every project,
            and Vastu Consultation, aligning designs with traditional principles
            for harmony and prosperity. With a client-focused approach, Riddhi
            Siddhi Consultancy transforms ideas into inspiring spaces that
            reflect both vision and excellence.
          </p>
          <Link
            to="/about"
            className="text-yellow-600 font-semibold hover:underline"
          >
            Learn More →
          </Link>
        </motion.div>
        <motion.img
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
          src="/ridhisidhi2.pmg.jpg"
          alt="About"
          className="rounded-2xl shadow-lg"
        />
      </section>

      {/* ✅ Services Preview */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl font-bold mb-12"
          >
            Our Services
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-yellow-600">
                Architecture Planning
              </h3>
              <p className="text-gray-600">
                We create innovative architectural plans that combine aesthetics
                and practicality for every project.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-yellow-600">
                Structure Designing
              </h3>
              <p className="text-gray-600">
                Our structural designs ensure safety, durability, and seamless
                integration with your vision.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-yellow-600">
                Interior Designing
              </h3>
              <p className="text-gray-600">
                We craft luxurious interiors tailored to your lifestyle,
                blending elegance, functionality, and creativity.
              </p>
            </motion.div>
          </div>
          <div className="mt-8">
            <Link
              to="/services"
              className="text-yellow-600 font-semibold hover:underline"
            >
              Explore All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ✅ Projects Section (Team Style) */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-3xl font-bold text-center mb-12"
        >
          Our Projects
        </motion.h2>

        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={`flex flex-col md:flex-row ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } items-center gap-6 md:gap-12 mb-12`}
          >
            {/* Project Image */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src={project.image}
                alt={project.title}
                className="w-full md:w-[90%] h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Project Content */}
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-bold text-yellow-600 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <Link
                to={`/projects/${project.id}`}
                className="text-yellow-600 font-semibold hover:underline"
              >
                View Details →
              </Link>
            </div>
          </motion.div>
        ))}

        <div className="mt-12 text-center">
          <Link
            to="/projects"
            className="text-yellow-600 font-semibold hover:underline"
          >
            View All Projects →
          </Link>
        </div>
      </section>

      {/* ✅ Team Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl font-bold text-center mb-12"
          >
            Meet Our Team
          </motion.h2>

          {/* Team Members */}
          {[
            {
              name: "Mr. Bhatt",
              role: "Interior Designer",
              desc: "Mr. Bhatt specializes in creating stunning interiors with a perfect balance of style and functionality.",
              img: "/men1.png",
            },
            {
              name: "Roy",
              role: "Project Manager",
              desc: "Roy ensures every project runs smoothly, maintaining high standards of design and execution.",
              img: "/men2.png",
            },
            {
              name: "Sidharth",
              role: "Lead Architect",
              desc: "Sidharth leads the architectural design with a focus on elegance, functionality, and innovation.",
              img: "/men3.png",
            },
          ].map((member, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={`flex flex-col md:flex-row ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              } items-center gap-6 md:gap-12 mb-12`}
            >
              <div className="md:w-1/2 flex justify-center">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-48 h-48 object-cover rounded-full shadow-lg"
                />
              </div>
              <div className="md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl font-bold text-yellow-600 mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-700 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.desc}</p>
              </div>
            </motion.div>
          ))}

          <div className="mt-12 text-center">
            <Link
              to="/about"
              className="text-yellow-600 font-semibold hover:underline"
            >
              Know More About Us →
            </Link>
          </div>
        </div>
      </section>

      {/* ✅ Contact Preview */}
      <section className="py-16 bg-yellow-600 text-white">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-3xl font-bold text-center mb-4"
        >
          Let’s Work Together
        </motion.h2>
        <p className="text-center mb-12">
          Have a project in mind? We’d love to bring it to life.
        </p>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-3xl font-bold text-yellow-600 mb-6">
              Contact Information
            </h3>
            <p className="text-yellow-500 text-1xl">
              <strong>Email:</strong> info@ridhisidhi.com
            </p>
            <p className="text-yellow-500 text-1xl">
              <strong>Phone:</strong> +91 98765 43210
            </p>
            <p className="text-yellow-500 text-1xl">
              <strong>Address:</strong> 123, Luxury Street, Mumbai, India
            </p>
          </motion.div>

          {/* Send Us a Message */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white p-8 rounded-2xl shadow-lg text-gray-900"
          >
            <h3 className="text-2xl font-bold mb-6 text-yellow-600">
              Send Us a Message
            </h3>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              ></textarea>
              <button
                type="submit"
                className="bg-yellow-600 text-white font-semibold py-3 rounded-lg hover:bg-yellow-700 transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
