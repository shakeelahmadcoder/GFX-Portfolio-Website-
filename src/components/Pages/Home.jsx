import React from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from '../../assets/Images/1.jpg';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      ></div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-4">
        <p className="text-lg md:text-xl font-light mb-4">
          Hello, I'm
        </p>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Muhammad Ahtisham
        </h1>
        <p className="text-xl md:text-2xl font-medium mb-8">
          I am a Graphic Designer
        </p>
        <button
          onClick={() => navigate('/contact')}
          className="px-8 py-4 bg-yellow-500 text-black text-lg rounded-full shadow-lg hover:bg-yellow-600 transition duration-300"
        >
          Contact Me
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-16 h-16 bg-blue-500 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-pink-500 rounded-full opacity-30 animate-bounce"></div>
    </div>
  );
};

export default Home;
