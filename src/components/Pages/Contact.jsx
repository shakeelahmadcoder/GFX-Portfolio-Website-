import React from "react";

const Contact = () => {
  // Inline JSON Data
  const data = {
    header: {
      title: "Get in Touch",
      description:
        "We would love to hear from you! Whether you have a question, suggestion, or just want to say hi, feel free to contact us.",
    },
    contactInfo: [
      {
        icon: "📞",
        title: "Call Us",
        details: ["201-354-4443", "201-354-4443"],
      },
      {
        icon: "📧",
        title: "Email Us",
        details: ["contact@gsmith.com", "info@gsmith.com"],
      },
      {
        icon: "📍",
        title: "Our Location",
        details: ["474 Central Road", "New York, NY"],
      },
    ],
    formSection: {
      title: "Reach Out to Us",
      submitText: "Send Your Message",
    },
  };

  return (
    <div className="h-screen overflow-y-auto text-white flex justify-center p-5 bg-gradient-to-b ">
      <div className="w-full max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-yellow-300 mb-4">{data.header.title}</h2>
          <p className="text-gray-300 text-lg">{data.header.description}</p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {data.contactInfo.map((item, index) => (
            <div
              key={index}
              className="bg-transparent border-2 border-gray-500 p-8 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105"
            >
              <div className="text-yellow-400 text-5xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-yellow-200">{item.title}</h3>
              {item.details.map((line, idx) => (
                <p key={idx} className="text-gray-400 text-sm mb-2">{line}</p>
              ))}
            </div>
          ))}
        </div>

        {/* Form Section */}
        <div className="bg-transparent border-2 border-gray-500 p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold mb-6 text-yellow-300 text-center">{data.formSection.title}</h3>
          <form className="space-y-6">
            <div className="flex flex-col md:flex-row md:space-x-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-transparent border-2 border-gray-400 p-4 rounded-md text-white focus:outline-none focus:border-yellow-500 transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-transparent border-2 border-gray-400 p-4 rounded-md text-white focus:outline-none focus:border-yellow-500 transition mt-4 md:mt-0"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-transparent border-2 border-gray-400 p-4 rounded-md text-white focus:outline-none focus:border-yellow-500 transition"
            />
            <textarea
              placeholder="Your Message"
              rows="6"
              className="w-full bg-transparent border-2 border-gray-400 p-4 rounded-md text-white focus:outline-none focus:border-yellow-500 transition"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-yellow-500 text-black font-semibold py-3 rounded-md hover:bg-yellow-600 transition"
            >
              {data.formSection.submitText}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
