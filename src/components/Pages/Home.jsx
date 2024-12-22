import React from 'react';
import { useNavigate } from 'react-router-dom';
import profilePic from '../../assets/Images/1.jpg'; // Replace with your profile picture

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#242424] px-4">
      {/* Main Content Container */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-12">
        {/* Left Content */}
        <div className="flex-1 px-6">
          <h2 className="text-xl text-gray-400 mb-2">Hi, I am</h2>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Muhammad Ahtisham
          </h1>
          <p className="text-lg text-gray-400 mb-6 leading-relaxed">
            I'm a skilled <strong className="text-white">Graphic Designer</strong> specializing in digital and print media. From logos and branding to brochures and packaging, I deliver creative and impactful designs that exceed expectations.
            <br /><br />
            <strong className="text-white">Connect with me</strong> on <strong className="text-blue-500">WhatsApp</strong> or <strong className="text-green-500">Fiverr</strong> to bring your vision to life.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <button
              onClick={() => navigate('/download-cv')}
              className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow-md transition duration-300"
            >
              Download CV
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="px-6 py-3 bg-gray-600 text-white rounded-full hover:bg-gray-700 shadow-md transition duration-300"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={profilePic}
            alt="Graphic Designer"
            className="rounded-full shadow-lg w-64 h-64 object-cover border-4 border-gray-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
