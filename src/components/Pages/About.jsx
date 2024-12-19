import React from "react";
import { FaBriefcase, FaCheckCircle, FaPalette, FaCamera } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import bgImage from "../../assets/Images/12.jpg";

const About = () => {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <div className="h-screen overflow-auto text-white py-12 px-8 lg:px-16">
      {/* About Header */}
      <h1 className="text-4xl lg:text-5xl font-bold text-center mb-6">About Me</h1>
      <p className="text-gray-400 text-center mb-10 px-6 lg:px-32">
        I am a passionate and dedicated graphic designer with a keen eye for detail and a creative approach to problem-solving.
      </p>

      {/* About Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16">
        {/* Image Section */}
        <div className="relative mx-auto lg:mx-0">
          <div className="w-60 h-60 lg:w-52 lg:h-52 bg-yellow-500 absolute top-5 left-5 -z-10"></div>
          <img
            src={bgImage}
            alt="Profile"
            className="relative z-10 rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div>
          <h2 className="text-yellow-400 text-3xl lg:text-4xl font-bold mb-2">Muhammad Ahtisham</h2>
          <h3 className="text-lg text-gray-300 font-semibold mb-4">Graphic Designer</h3>
          <p className="text-gray-400 mb-6 leading-relaxed">
            With over 5 years of experience in graphic design, I specialize in creating visually compelling designs that align with client goals. I enjoy bringing concepts to life and making them stand out in a competitive market.
          </p>
          <div className="flex gap-4">
            <button className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-full font-bold hover:bg-yellow-600 transition duration-300">
              Download Portfolio
            </button>
            <button
              className="border border-yellow-500 px-6 py-2 rounded-full font-bold text-yellow-400 hover:bg-yellow-500 hover:text-gray-900 transition duration-300"
              onClick={() => navigate("/contact")} // Navigate to the contact page
            >
              Hire Me
            </button>
          </div>
        </div>
      </div>

      {/* My Journey and My Interests */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* My Journey */}
        <div>
          <h3 className="text-yellow-400 text-2xl font-semibold mb-6">My Journey</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-4">
              <FaBriefcase className="text-yellow-400 text-2xl" />
              <div>
                <h4 className="text-lg font-semibold">5 Years</h4>
                <p className="text-gray-400 text-sm">Graphic Design Experience</p>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <FaCheckCircle className="text-yellow-400 text-2xl" />
              <div>
                <h4 className="text-lg font-semibold">300+ Projects</h4>
                <p className="text-gray-400 text-sm">Completed Successfully</p>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <FaBriefcase className="text-yellow-400 text-2xl" />
              <div>
                <h4 className="text-lg font-semibold">Freelance</h4>
                <p className="text-gray-400 text-sm">Available</p>
              </div>
            </li>
          </ul>
        </div>

        {/* My Interests */}
        <div>
          <h3 className="text-yellow-400 text-2xl font-semibold mb-6">My Interests</h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center gap-3">
              <FaPalette className="text-yellow-400 text-2xl" />
              <span className="text-lg font-semibold">Illustrations</span>
            </div>
            <div className="flex items-center gap-3">
              <FaCamera className="text-yellow-400 text-2xl" />
              <span className="text-lg font-semibold">Photography</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
