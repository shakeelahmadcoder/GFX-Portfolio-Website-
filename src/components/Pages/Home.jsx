import React from "react";
import backgroundImage from "../../assets/Images/home.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      className="h-screen w-full bg-cover bg-center relative overflow-hidden font-oswald"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0  opacity-90"></div>

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center justify-end h-full text-center text-white px-4 pb-16"
      >
        <h1 className="text-2xl md:text-4xl font-light mb-2 tracking-tight">
          HELLO I'M
        </h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold   text-yellow-500 tracking-tight">
          MUHAMMAD AHTISHAM
        </h2>
        <div className="mt-4 flex gap-4">
          <button
            className="px-6 py-2 text-xl bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600 transition duration-300"
            onClick={() => window.open("https://wa.me/923219350989", "_blank")}
          >
            HIRE ME
          </button>
          <button
            className="px-6 py-2 text-xl border-2 border-yellow-500 text-white font-semibold rounded hover:bg-yellow-500 hover:text-black transition duration-300"
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
