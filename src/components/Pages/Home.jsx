import React from "react";
import backgroundImage from "../../assets/Images/backgroundImage.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      className="h-screen w-full bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Animated Overlay */}
      <div className="absolute inset-0 animate-backgroundMove bg-gradient-to-r from-black via-transparent to-black opacity-80"></div>

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4"
        style={{ animation: "slideUp 1s ease-in-out" }}
      >
        <h1
          className="text-lg md:text-2xl font-light mb-2"
          style={{ animation: "fadeIn 1.2s ease-in-out" }}
        >
          Hello, I'm
        </h1>
        <h2
          className="text-2xl md:text-4xl lg:text-7xl font-extrabold tracking-widest "
          style={{ animation: "fadeIn 1.5s ease-in-out" }}
        >
          Muhammad Ahtisham
        </h2>
        <p
          className="text-sm md:text-lg lg:text-xl font-medium mt-4 max-w-lg"
          style={{ animation: "fadeIn 1.8s ease-in-out" }}
        >
          A passionate and creative{" "}
          <span className="text-yellow-500">Graphic Designer</span> dedicated to
          bringing your ideas to life.
        </p>
        <div
          className="mt-4 flex  gap-4"
          style={{ animation: "fadeIn 2s ease-in-out" }}
        >
          <button
            className="px-8 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-600 transition transform hover:scale-105"
            onClick={() => window.open("https://wa.me/923219350989", "_blank")}
          >
            Hire Me
          </button>
          <button
            className="px-8 py-3 border-2 border-yellow-500 text-white font-semibold rounded-full hover:bg-yellow-500 hover:text-black transition transform hover:scale-105"
            onClick={() => navigate("/portfolio")}
          >
            Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
