import React, { useState } from "react";
import Image1 from '../../assets/Images/11.jpg';
import Image2 from '../../assets/Images/2.jpg';
import Image3 from '../../assets/Images/3.jpg';
import Image4 from '../../assets/Images/4.jpg';
import Image5 from '../../assets/Images/5.jpg';
import Image6 from '../../assets/Images/6.jpg';

const portfolioData = [
  { id: 1, title: "Web Design", category: "Web Design", image: Image1 },
  { id: 2, title: "Graphic Poster", category: "Graphic Design", image: Image2 },
  { id: 3, title: "Mobile App", category: "Mobile App", image: Image3 },
  { id: 4, title: "Graphic Logo", category: "Graphic Design", image: Image4 },
  { id: 5, title: "UI/UX Design", category: "Web Design", image: Image5 },
  { id: 6, title: "App Poster", category: "Graphic Design", image: Image6 },
];

const Portfolio = () => {
  const [filter, setFilter] = useState("All Projects");

  // Filter Data
  const filteredData =
    filter === "All Projects"
      ? portfolioData
      : portfolioData.filter((item) => item.category === filter);

  return (
    <div className="h-screen bg-transparent flex flex-col items-center text-white p-5 overflow-y-auto">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-2">Portfolio</h1>
      <p className="text-gray-400 text-center max-w-2xl mb-8">
        Showcasing my creative work in web design, graphic design, and mobile applications.
      </p>

      {/* Filters */}
      <div className="flex space-x-6 mb-8">
        {["All Projects", "Web Design", "Mobile App", "Graphic Design"].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`text-sm uppercase font-medium px-4 py-2 ${
              filter === category ? "text-yellow-500 border-b-2 border-yellow-500" : "text-gray-300"
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
              className="w-full h-full object-cover rounded-lg"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
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
