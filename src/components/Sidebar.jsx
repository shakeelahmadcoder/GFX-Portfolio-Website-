import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiUser, FiFileText, FiBriefcase, FiGrid, FiMessageCircle, FiBook, FiMail } from 'react-icons/fi'; // Importing icons
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen bg-black text-white p-5">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-20">
        <span className="text-yellow-300">G</span>smith
      </h1>

      {/* Navigation */}
      <nav>
        <ul className="flex flex-col gap-4">
          <li className="flex items-center gap-2">
            <FiHome />
            <Link to="/">Home</Link>
          </li>
          <li className="flex items-center gap-2">
            <FiUser />
            <Link to="/about">About Me</Link>
          </li>
          <li className="flex items-center gap-2">
            <FiFileText />
            <Link to="/resume">Resume</Link>
          </li>
          <li className="flex items-center gap-2">
            <FiBriefcase />
            <Link to="/services">Services</Link>
          </li>
          <li className="flex items-center gap-2">
            <FiGrid />
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className="flex items-center gap-2">
            <FiMessageCircle />
            <Link to="/testimonials">Testimonials</Link>
          </li>
          <li className="flex items-center gap-2">
            <FiBook />
            <Link to="/blog">Blog</Link>
          </li>
          <li className="flex items-center gap-2">
            <FiMail />
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* sidebar footer  */}
      <footer className='fixed bottom-5 flex flex-col gap-3 items-center'>
        <div className="icons flex gap-3 cursor-pointer">
          <FaFacebook/>
          <FaLinkedin/>
          <FaTwitter/>
          <FaInstagram/>
        </div>
        <p className='text-sm'>&copy; Shakeel Ahmed</p>
      </footer>
    </div>
  );
};

export default Sidebar;
