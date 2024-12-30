import React, { useState } from "react";
import technology from "../../assets/Images/technology.jpeg"
import quran from "../../assets/Images/quran.jfif"
import fehmida from "../../assets/Images/Fehmida.jpeg"
import seo from "../../assets/Images/SEO.jpeg"
import college from "../../assets/Images/college.jpeg"
import complex from "../../assets/Images/complex.jpeg"
const testimonials = [
  {
    id: 1,
    name: "Shape and Shade by Fehmida",
    text: "I am working from 6 months and I had never seen the skills which you have Ma Sha Allah. You made all my posts and videos beautiful, which I really want. In our whole city, never ever seen is your compatible person. Allah bless you more success, Ameen.",
    image: fehmida,
    rating: 5,
  },
  {
    id: 2,
    name: "Click Solutions CEO",
    text: "I recently worked with a highly skilled and creative graphic designer, and I am thoroughly impressed with their work. They are not only an expert in their field but also bring a unique artistic flair to every project. Their designs were exactly what I needed—professional, eye-catching, and perfectly tailored to my requirements. I highly recommend their services to anyone looking for top-notch graphic design work!",
    image: technology,
    rating: 5,
  },
  {
    id: 3,
    name: "Quran Academy",
    text: "I am truly impressed with the ad!!! The content is clear, engaging, and perfectly aligned with its purpose. The visuals are eye-catching, and the call-to-action is very effective. Thank you for putting in such effort and creativity—Great job!!!",
    image: quran,
    rating: 5,
  },
  {
    id: 4,
    name: "CHAPS Group of Colleges",
    text: "Muhammad Ahtisham has been an invaluable asset to the CHAPS Group of Colleges. Their creativity and professionalism shine through in every promotional ad and video they produce. Each project reflects a deep understanding of our brand, effectively capturing the essence of our institution. Their attention to detail, innovative designs, and timely delivery consistently exceed expectations. We highly recommend Muhammad Ahtisham for any creative endeavor!",
    image: college,
    rating: 5,
  },
  {
    id: 5,
    name: "Techlogics",
    text: "I was impressed with Ahtisham's professionalism and enthusiasm throughout the project. He was a pleasure to communicate with and provided valuable feedback at every stage. He was also very understanding of the creative process and patient with revisions. I would definitely work with him again.",
    image: technology,
    rating: 5,
  },
  {
    id: 6,
    name: "Ameer Complex",
    text: "Working with Ahtisham  was an absolute pleasure! They truly understood my vision and delivered designs that exceeded my expectations. The creativity, attention to detail, and professionalism they brought to the project were exceptional. Every step of the process was smooth, and they were always open to feedback and quick with revisions. I highly recommend their graphic design services to anyone looking for high-quality and impactful designs. Thank you for bringing my ideas to life!",
    image: complex,
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
    <div className="h-screen overflow-y-auto p-6">
      {/* Header */}
      <h2 className="text-4xl font-bold text-center mb-6">Testimonials</h2>
      <p className="text-center text-gray-400 mb-8 px-4">
        See what people are saying about our services!
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
                <h3 className="font-semibold text-lg text-white">
                  {testimonial.name}
                </h3>
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