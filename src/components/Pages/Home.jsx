import React from "react";
import backgroundImage from "../../assets/Images/home.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      className="h-screen w-full bg-cover bg-center relative overflow-hidden font-oswald opacity-50"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-end h-full text-center text-white px-6 pb-16">
        <h1 className="text-xl md:text-3xl font-light mb-2 tracking-wider">
          HELLO, I'M
        </h1>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-yellow-500 tracking-wider">
          MUHAMMAD AHTISHAM
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl">
          I'm a passionate Graphic Designer dedicated to crafting engaging and impactful Designs.
        </p>
        <div className="mt-8 flex gap-6">
          <button
            className="px-8 py-3 text-lg md:text-xl bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 hover:scale-105 transition-transform duration-300"
            onClick={() => window.open("https://wa.me/923219350989", "_blank")}
          >
            HIRE ME
          </button>
          <button
            className="px-8 py-3 text-lg md:text-xl border-2 border-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-500 hover:text-black hover:scale-105 transition-transform duration-300"
            onClick={() => navigate("/portfolio")}
          >
            PORTFOLIO
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
