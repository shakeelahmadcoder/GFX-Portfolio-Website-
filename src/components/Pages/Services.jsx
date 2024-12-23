import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const servicesData = [
    {
      title: "Fiverr Thumbnail",
      description: "Custom thumbnails to boost your Fiverr profile.",
      icon: "🎞️",
      category: "Fiverr Thumbnail",
    },
    {
      title: "YouTube Thumbnail",
      description: "Engaging thumbnails for your YouTube videos.",
      icon: "📸",
      category: "YouTube Thumbnail",
    },
    {
      title: "Product Design",
      description: "High-quality product designs for your business.",
      icon: "📦",
      category: "Product Design",
    },
  ];

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-transparent text-white p-5 overflow-y-auto">
      {/* Heading and Paragraph */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-white">Graphic Design Services</h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Explore our services designed to elevate your brand, from YouTube thumbnails to product designs.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        {servicesData.map((service, index) => (
          <Link
            key={index}
            to={'/portfolio'}
            className="flex flex-col items-center text-center p-6 border border-dashed border-white shadow-lg bg-transparent hover:bg-black/20 transition"
          >
            <div className="text-5xl mb-4 text-yellow-500">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-2 text-white">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
