import React from 'react';
import bgImage from '../../assets/Images/1.jpg';

const Home = () => {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover opacity-10"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      ></div>

      {/* Content Overlay */}
      <div className="relative flex items-center justify-center min-h-screen text-center px-4">
        <div>
          <p className="text-lg md:text-2xl mb-4 font-light">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Ahtshim Graphix</h1>
          <p className="text-xl md:text-3xl font-light">I am a Graphic Designer</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
