import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiUser, FiFileText, FiBriefcase, FiGrid, FiMessageCircle, FiBook, FiMail } from 'react-icons/fi';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full bg-black text-white p-5 overflow-y-auto ">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-20">
        <span className="text-yellow-300">G</span>smith
      </h1>

      {/* Navigation */}
      <nav>
        <ul className="flex flex-col gap-4">
          <li className="flex items-center gap-2">
            <FiHome />
            <Link  to="/">Home</Link>
          </li>
          <li className="flex items-center gap-2">
            <FiUser />
            <Link  to="/about">About Me</Link>
          </li>
          <li className="flex items-center gap-2">
            <FiFileText />
            <Link  to="/resume">Resume</Link>
          </li>
          <li className="flex items-center gap-2">
            <FiBriefcase />
            <Link  to="/services">Services</Link>
          </li>
          <li className="flex items-center gap-2">
            <FiGrid />
            <Link  to="/portfolio">Portfolio</Link>
          </li>
          <li className="flex items-center gap-2">
            <FiMessageCircle />
            <Link  to="/testimonials">Testimonials</Link>
          </li>
          <li className="flex items-center gap-2">
            <FiBook />
            <Link  to="/blog">Blog</Link>
          </li>
          <li className="flex items-center gap-2">
            <FiMail />
            <Link  to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Sidebar Footer */}
      <footer className="mt-auto ">
        <div className="flex justify-center gap-3 cursor-pointer mb-3">
          <FaFacebook />
          <FaLinkedin />
          <FaTwitter />
          <FaInstagram />
        </div>
        <p className="text-sm text-center">&copy; Shakeel Ahmed</p>
      </footer>
    </div>
  );
};

export default Sidebar;