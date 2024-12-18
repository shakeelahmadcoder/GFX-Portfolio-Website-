import React from "react";

const servicesData = [
  {
    title: "Graphic Design",
    description: "Creative designs with years of experience to bring ideas to life.",
    icon: "🎨",
  },
  {
    title: "Web Development",
    description: "Building responsive and interactive websites that scale.",
    icon: "💻",
  },
  {
    title: "Web Design",
    description: "Designing modern and user-friendly web interfaces.",
    icon: "🖌️",
  },
  {
    title: "Web UI",
    description: "Focused on building clean and functional user interfaces.",
    icon: "🌐",
  },
  {
    title: "Mobile App",
    description: "Developing mobile applications for all platforms.",
    icon: "📱",
  },
  {
    title: "Digital Marketing",
    description: "Helping businesses grow with proven marketing strategies.",
    icon: "📊",
  },
];

const Services = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-transparent text-white p-5 overflow-y-auto">
      {/* Heading and Paragraph */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-white">Our Services</h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          We offer a variety of professional services to help you succeed in your business journey. From design to development, we have you covered.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 border border-dashed border-white  shadow-lg bg-transparent hover:bg-black/20 transition"
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
