import React from "react";
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const data = {
    header: {
      title: "Get in Touch",
      description:
        "Feel free to reach out to us via WhatsApp or call. We're here to assist you!",
    },
    contactInfo: [
      {
        icon: <FaWhatsapp className="text-green-500 text-6xl" />,
        title: "WhatsApp Us",
        link: "https://wa.me/923219350989",
        buttonText: "Message on WhatsApp",
      },
      {
        icon: <FaPhoneAlt className="text-yellow-400 text-6xl" />,
        title: "Call Us",
        link: "tel:+923219350989",
        buttonText: "Call Now",
      },
      {
        icon: <FaMapMarkerAlt className="text-red-500 text-6xl" />,
        title: "Visit Us",
        details: ["Jauharabd District Khushab"],
      },
    ],
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-b text-white p-5">
      <div className="w-full max-w-5xl bg-opacity-60 p-10 rounded-xl shadow-2xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-extrabold text-yellow-300 mb-6">
            {data.header.title}
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            {data.header.description}
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.contactInfo.map((item, index) => (
            <div
              key={index}
              className="bg-transparent border-2 border-gray-500 p-10 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105"
            >
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-3xl font-bold mb-4 text-yellow-200">
                {item.title}
              </h3>
              {item.details
                ? item.details.map((line, idx) => (
                    <p key={idx} className="text-gray-400 text-lg mb-2">
                      {line}
                    </p>
                  ))
                : null}
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-600 transition"
                >
                  {item.buttonText}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
