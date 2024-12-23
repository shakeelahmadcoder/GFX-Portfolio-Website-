import React from "react";
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  // Inline JSON Data
  const data = {
    header: {
      title: "Get in Touch",
      description:
        "Feel free to reach out to us via WhatsApp or call. We're here to assist you!",
    },
    contactInfo: [
      {
        icon: <FaWhatsapp className="text-green-500 text-4xl" />,
        title: "WhatsApp Us",
        link: "https://wa.me/2013544443", // Replace with your WhatsApp number
        buttonText: "Message on WhatsApp",
      },
      {
        icon: <FaPhoneAlt className="text-yellow-400 text-4xl" />,
        title: "Call Us",
        link: "tel:2013544443", // Replace with your phone number
        buttonText: "Call Now",
      },
      {
        icon: <FaMapMarkerAlt className="text-red-500 text-4xl" />,
        title: "Visit Us",
        details: ["474 Central Road", "New York, NY"],
      },
    ],
  };

  return (
    <div className="h-screen overflow-y-auto text-white flex justify-center p-5 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="w-full max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-yellow-300 mb-4">
            {data.header.title}
          </h2>
          <p className="text-gray-300 text-lg">{data.header.description}</p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.contactInfo.map((item, index) => (
            <div
              key={index}
              className="bg-transparent border-2 border-gray-500 p-8 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-yellow-200">
                {item.title}
              </h3>
              {item.details
                ? item.details.map((line, idx) => (
                    <p key={idx} className="text-gray-400 text-sm mb-2">
                      {line}
                    </p>
                  ))
                : null}
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-600 transition"
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
