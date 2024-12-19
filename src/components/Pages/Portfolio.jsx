import React, { useState } from "react";
import Thumbnail1 from "../../assets/Images/thumbnail1.jpg";
import Thumbnail2 from "../../assets/Images/thumbnail2.jpg";
import Thumbnail3 from "../../assets/Images/thumbnail3.jpg";
import Thumbnail4 from "../../assets/Images/thumbnail4.jpg";
import Thumbnail5 from "../../assets/Images/thumbnail5.jpg";
import Thumbnail6 from "../../assets/Images/thumbnail6.jpg";
import Thumbnail7 from "../../assets/Images/thumbnail7.jpg";
import Poster1 from "../../assets/Images/Poster1.jpg";
import Poster2 from "../../assets/Images/Poster2.jpg";
import Poster3 from "../../assets/Images/Poster3.jpg";
import Poster4 from "../../assets/Images/Poster4.jpg";
import Poster5 from "../../assets/Images/Poster5.jpg";
import Poster6 from "../../assets/Images/Poster6.jpg";
import Logo1 from "../../assets/Images/Logo1.jpg";
import Logo2 from "../../assets/Images/Logo2.jpg";

const portfolioData = [
  // Thumbnail Design
  { id: 1, title: "Thumbnail Design 1", category: "Thumbnail Design", image: Thumbnail1 },
  { id: 2, title: "Thumbnail Design 2", category: "Thumbnail Design", image: Thumbnail2 },
  { id: 3, title: "Thumbnail Design 3", category: "Thumbnail Design", image: Thumbnail3 },
  { id: 4, title: "Thumbnail Design 4", category: "Thumbnail Design", image: Thumbnail4 },
  { id: 5, title: "Thumbnail Design 5", category: "Thumbnail Design", image: Thumbnail5 },
  { id: 6, title: "Thumbnail Design 6", category: "Thumbnail Design", image: Thumbnail6 },
  { id: 7, title: "Thumbnail Design 7", category: "Thumbnail Design", image: Thumbnail7 },

  // Poster Design
  { id: 8, title: "Poster Design 1", category: "Poster Design", image: Poster1 },
  { id: 9, title: "Poster Design 2", category: "Poster Design", image: Poster2 },
  { id: 10, title: "Poster Design 3", category: "Poster Design", image: Poster3 },
  { id: 11, title: "Poster Design 4", category: "Poster Design", image: Poster4 },
  { id: 12, title: "Poster Design 5", category: "Poster Design", image: Poster5 },
  { id: 13, title: "Poster Design 6", category: "Poster Design", image: Poster6 },

  // Logo Design
  { id: 14, title: "Logo Design 1", category: "Logo Design", image: Logo1 },
  { id: 15, title: "Logo Design 2", category: "Logo Design", image: Logo2 },
];

const Portfolio = () => {
  const [filter, setFilter] = useState("All Projects");

  // Filter Data
  const filteredData =
    filter === "All Projects"
      ? portfolioData
      : portfolioData.filter((item) => item.category === filter);

  return (
    <div className="h-screen flex flex-col items-center text-white p-5 overflow-y-auto">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-2">Portfolio</h1>
      <p className="text-gray-400 text-center max-w-2xl mb-8">
        Showcasing my creative work in Graphic Design, including thumbnails, posters, and logos.
      </p>

      {/* Filters */}
      <div className="flex gap-2 mb-8">
        {["All Projects", "Thumbnail Design", "Poster Design", "Logo Design"].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`text-sm sm:text-base md:text-lg uppercase font-medium px-4 py-2 ${
              filter === category
                ? "text-yellow-500 border-b-2 border-yellow-500"
                : "text-gray-300"
            } hover:text-yellow-500`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Portfolio Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {filteredData.map((item) => (
          <div key={item.id} className="relative group">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-60 object-cover rounded-lg"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <h3 className="text-lg font-semibold text-yellow-500">{item.title}</h3>
              <p className="text-sm text-gray-200">{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
