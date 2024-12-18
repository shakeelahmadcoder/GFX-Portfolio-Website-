import React, { useState } from "react";

// Testimonials Data
const testimonials = [
  {
    id: 1,
    name: "Melvin G. Byrd",
    company: "Herman's World",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "S. Williams",
    company: "Old America Stores",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Melvin G. Byrd",
    company: "Herman's World",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "S. Williams",
    company: "Old America Stores",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0);

  // Pagination logic
  const testimonialsPerPage = 2;
  const startIndex = currentPage * testimonialsPerPage;
  const selectedTestimonials = testimonials.slice(
    startIndex,
    startIndex + testimonialsPerPage
  );

  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const goToNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="h-full overflow-y-auto p-6">
      {/* Header */}
      <h2 className="text-4xl font-bold text-center mb-6">Testimonials</h2>
      <p className="text-center text-gray-400 mb-8 px-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices.
      </p>

      {/* Testimonials Cards */}
      <div className="flex flex-wrap justify-center gap-8">
        {selectedTestimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-gray-800 p-6 rounded-lg w-full md:w-1/2 lg:w-1/3 shadow-lg hover:shadow-xl transition duration-300"
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="font-semibold text-lg text-white">{testimonial.name}</h3>
                <p className="text-gray-400 text-sm">{testimonial.company}</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">{testimonial.text}</p>
            <div className="flex">
              {Array.from({ length: testimonial.rating }).map((_, index) => (
                <span key={index} className="text-yellow-500 text-xl">
                  ★
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={goToPrevPage}
          className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-600 transition"
        >
          Previous
        </button>
        <button
          onClick={goToNextPage}
          className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-600 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
}
