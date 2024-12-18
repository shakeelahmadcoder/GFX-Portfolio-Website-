import React from "react";

const servicesData = [
  {
    title: "Poster Design",
    description: "Eye-catching posters tailored for your events, campaigns, and promotions.",
    icon: "🖼️",
  },
  {
    title: "Thumbnail Design",
    description: "Professional YouTube thumbnails to maximize clicks and views.",
    icon: "🎞️",
  },
  {
    title: "Logo Design",
    description: "Unique and memorable logos that represent your brand identity.",
    icon: "⚜️",
  },
  {
    title: "Flyer Design",
    description: "Creative and informative flyers for your marketing needs.",
    icon: "📄",
  },
  {
    title: "Social Media Design",
    description: "Custom social media graphics to boost your online presence.",
    icon: "📱",
  },
];

const Services = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-transparent text-white p-5 overflow-y-auto">
      {/* Heading and Paragraph */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-white">Graphic Design Services</h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          We specialize in providing top-notch graphic design services to cater to all your creative needs. From posters to social media designs, we deliver excellence.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 border border-dashed border-white shadow-lg bg-transparent hover:bg-black/20 transition"
          >
            <div className="text-5xl mb-4 text-yellow-500">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-2 text-white">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
