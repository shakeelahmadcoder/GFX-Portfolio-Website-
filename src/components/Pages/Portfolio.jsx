import React, { useState } from "react";
import Fiverr1 from "../../assets/Images/PortfolioImages/Fiverr1.jpg";
import Fiverr2 from "../../assets/Images/PortfolioImages/Fiverr2.jpg";
import Fiverr3 from "../../assets/Images/PortfolioImages/Fiverr3.jpg";
import Fiverr4 from "../../assets/Images/PortfolioImages/Fiverr4.jpg";
import Fiverr5 from "../../assets/Images/PortfolioImages/Fiverr5.jpg";
import Fiverr6 from "../../assets/Images/PortfolioImages/Fiverr6.jpg";
import Fiverr7 from "../../assets/Images/PortfolioImages/Fiverr7.jpg";
import Fiverr8 from "../../assets/Images/PortfolioImages/Fiverr8.jpg";
import Fiverr9 from "../../assets/Images/PortfolioImages/Fiverr9.jpg";
import Fiverr10 from "../../assets/Images/PortfolioImages/Fiverr10.jpg";
import Fiverr11 from "../../assets/Images/PortfolioImages/Fiverr11.jpg";
import Fiverr12 from "../../assets/Images/PortfolioImages/Fiverr12.jpg";
import Fiverr13 from "../../assets/Images/PortfolioImages/Fiverr13.jpg";
import Fiverr14 from "../../assets/Images/PortfolioImages/Fiverr14.jpg";
import Fiverr15 from "../../assets/Images/PortfolioImages/Fiverr15.jpg";
import Fiverr16 from "../../assets/Images/PortfolioImages/Fiverr16.jpg";
import Fiverr17 from "../../assets/Images/PortfolioImages/Fiverr17.jpg";
import Fiverr18 from "../../assets/Images/PortfolioImages/Fiverr18.jpg";
import Fiverr19 from "../../assets/Images/PortfolioImages/Fiverr19.jpg";
import Fiverr20 from "../../assets/Images/PortfolioImages/Fiverr20.jpg";
import Fiverr21 from "../../assets/Images/PortfolioImages/Fiverr21.jpg";
// import Fiverr22 from "../../assets/Images/PortfolioImages/Fiverr22.jpg";
import Fiverr23 from "../../assets/Images/PortfolioImages/Fiverr23.jpg";
import Ytthumbnail1 from "../../assets/Images/PortfolioImages/ytthumbnail1.jpg";
import Ytthumbnail2 from "../../assets/Images/PortfolioImages/ytthumbnail2.jpg";
import Ytthumbnail3 from "../../assets/Images/PortfolioImages/ytthumbnail3.jpg";
// import Ytthumbnail4 from "../../assets/Images/PortfolioImages/ytthumbnail4.jpg";
import Ytthumbnail5 from "../../assets/Images/PortfolioImages/ytthumbnail5.jpg";
import Ytthumbnail6 from "../../assets/Images/PortfolioImages/ytthumbnail6.jpg";
import Ytthumbnail7 from "../../assets/Images/PortfolioImages/ytthumbnail7.jpg";
import Product1 from "../../assets/Images/PortfolioImages/Product1.jpg";
import Product2 from "../../assets/Images/PortfolioImages/Product2.jpg";
import Product3 from "../../assets/Images/PortfolioImages/Product3.jpg";
import Product4 from "../../assets/Images/PortfolioImages/Product4.jpg";
import Product5 from "../../assets/Images/PortfolioImages/Product5.jpg";
import Product6 from "../../assets/Images/PortfolioImages/Product6.jpg";
import Product7 from "../../assets/Images/PortfolioImages/Product7.jpg";
import Product8 from "../../assets/Images/PortfolioImages/Product8.jpg";
import Product9 from "../../assets/Images/PortfolioImages/Product9.jpg";
import Product10 from "../../assets/Images/PortfolioImages/Product10.jpg";
import Product11 from "../../assets/Images/PortfolioImages/Product11.jpg";
import Product12 from "../../assets/Images/PortfolioImages/Product12.jpg";

const portfolioData = [
   // YouTube Thumbnails
  { id: 24, title: "YouTube Thumbnail 1", category: "YT Thumbnail", image: Ytthumbnail1 },
  { id: 25, title: "YouTube Thumbnail 2", category: "YT Thumbnail", image: Ytthumbnail2 },
  { id: 26, title: "YouTube Thumbnail 3", category: "YT Thumbnail", image: Ytthumbnail3 },
  // { id: 27, title: "YouTube Thumbnail 4", category: "YT Thumbnail", image: Ytthumbnail4 },
  { id: 28, title: "YouTube Thumbnail 5", category: "YT Thumbnail", image: Ytthumbnail5 },
  { id: 29, title: "YouTube Thumbnail 6", category: "YT Thumbnail", image: Ytthumbnail6 },
  { id: 30, title: "YouTube Thumbnail 7", category: "YT Thumbnail", image: Ytthumbnail7 },
  // Fiverr Thumbnails
  { id: 1, title: "Fiverr Thumbnail 1", category: "Fiverr Thumbnail", image: Fiverr1 },
  { id: 2, title: "Fiverr Thumbnail 2", category: "Fiverr Thumbnail", image: Fiverr2 },
  { id: 3, title: "Fiverr Thumbnail 3", category: "Fiverr Thumbnail", image: Fiverr3 },
  { id: 4, title: "Fiverr Thumbnail 4", category: "Fiverr Thumbnail", image: Fiverr4 },
  { id: 5, title: "Fiverr Thumbnail 5", category: "Fiverr Thumbnail", image: Fiverr5 },
  { id: 6, title: "Fiverr Thumbnail 6", category: "Fiverr Thumbnail", image: Fiverr6 },
  { id: 7, title: "Fiverr Thumbnail 7", category: "Fiverr Thumbnail", image: Fiverr7 },
  { id: 8, title: "Fiverr Thumbnail 8", category: "Fiverr Thumbnail", image: Fiverr8 },
  { id: 9, title: "Fiverr Thumbnail 9", category: "Fiverr Thumbnail", image: Fiverr9 },
  { id: 10, title: "Fiverr Thumbnail 10", category: "Fiverr Thumbnail", image: Fiverr10 },
  { id: 11, title: "Fiverr Thumbnail 11", category: "Fiverr Thumbnail", image: Fiverr11 },
  { id: 12, title: "Fiverr Thumbnail 12", category: "Fiverr Thumbnail", image: Fiverr12 },
  { id: 13, title: "Fiverr Thumbnail 13", category: "Fiverr Thumbnail", image: Fiverr13 },
  { id: 14, title: "Fiverr Thumbnail 14", category: "Fiverr Thumbnail", image: Fiverr14 },
  { id: 15, title: "Fiverr Thumbnail 15", category: "Fiverr Thumbnail", image: Fiverr15 },
  { id: 16, title: "Fiverr Thumbnail 16", category: "Fiverr Thumbnail", image: Fiverr16 },
  { id: 17, title: "Fiverr Thumbnail 17", category: "Fiverr Thumbnail", image: Fiverr17 },
  { id: 18, title: "Fiverr Thumbnail 18", category: "Fiverr Thumbnail", image: Fiverr18 },
  { id: 19, title: "Fiverr Thumbnail 19", category: "Fiverr Thumbnail", image: Fiverr19 },
  { id: 20, title: "Fiverr Thumbnail 20", category: "Fiverr Thumbnail", image: Fiverr20 },
  { id: 21, title: "Fiverr Thumbnail 21", category: "Fiverr Thumbnail", image: Fiverr21 },
  // { id: 22, title: "Fiverr Thumbnail 22", category: "Fiverr Thumbnail", image: Fiverr22 },
  { id: 23, title: "Fiverr Thumbnail 23", category: "Fiverr Thumbnail", image: Fiverr23 },

 

  // Product Designs
  { id: 31, title: "Product Design 1", category: "Product Design", image: Product1 },
  { id: 32, title: "Product Design 2", category: "Product Design", image: Product2 },
  { id: 33, title: "Product Design 3", category: "Product Design", image: Product3 },
  { id: 34, title: "Product Design 4", category: "Product Design", image: Product4 },
  { id: 35, title: "Product Design 5", category: "Product Design", image: Product5 },
  { id: 36, title: "Product Design 6", category: "Product Design", image: Product6 },
  { id: 37, title: "Product Design 7", category: "Product Design", image: Product7 },
  { id: 38, title: "Product Design 8", category: "Product Design", image: Product8 },
  { id: 39, title: "Product Design 9", category: "Product Design", image: Product9 },
  { id: 40, title: "Product Design 10", category: "Product Design", image: Product10 },
  { id: 41, title: "Product Design 11", category: "Product Design", image: Product11 },
  { id: 42, title: "Product Design 12", category: "Product Design", image: Product12 },
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
        Showcasing my creative work in Graphic Design, including thumbnails, bilbord designs, and product packaging.
      </p>

      {/* Filters */}
      <div className="flex gap-2 mb-8">
        {["All Projects", "Fiverr Thumbnail", "YT Thumbnail", "Product Design"].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`text-sm sm:text-base md:text-lg uppercase font-medium px-4 py-2 ${filter === category ? "text-yellow-500 border-b-2 border-yellow-500" : "text-gray-300"} hover:text-yellow-500`}
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
              className="w-full h-full object-cover "
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
