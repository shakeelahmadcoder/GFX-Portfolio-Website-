import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Import social media icons
import profileImage from "../../assets/Images/12.jpg"; // Replace with your image path

const About = () => {
  return (
    <div className="h-screen flex flex-col items-center  px-4 overflow-y-auto">
      {/* Header Section */}
      <div className="w-1/2 max-w-4xl bg-[#2a2a2a] p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between gap-6 mt-10">
        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src={profileImage}
            alt="Profile"
            className="w-36 h-36 rounded-full object-cover" // Adjusted the image size to make it larger
          />
          {/* Social Media Icons */}
          <div className="flex mt-4 gap-4">
  <a href="https://www.facebook.com/share/1DEGVocgVH/" target="_blank" rel="noopener noreferrer">
    <FaFacebook className="text-white-600 hover:text-blue-700 text-2xl" />
  </a>
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <FaTwitter className="text-white-400 hover:text-blue-500 text-2xl" />
  </a>
  <a href="https://www.instagram.com/muhammad_ahtisham_1/profilecard/?igsh=MTdlNDY5MXd5ZmhqaQ==" target="_blank" rel="noopener noreferrer">
    <FaInstagram className="text-white-500 hover:text-pink-600 text-2xl" />
  </a>
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
    <FaLinkedin className="text-white-700 hover:text-blue-800 text-2xl" />
  </a>
</div>

        </div>
        <div className="">
          <h1 className="text-2xl md:text-3xl font-bold   text-yellow-500 tracking-tight font-oswald">MUHAMMAD AHTISHAM</h1>
          <p className="text-sm md:text-base text-gray-400">Graphic Designer and Social Media Manger</p>
          <div className="mt-4 flex gap-4">
            <button className="bg-yellow-500 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded">
              Download CV
            </button>
            <button className="bg-white text-black font-semibold px-4 py-2 rounded">
              Contact
            </button>
          </div>

          <div className="mt-4">
            <p className="text-sm">
              <span className="font-semibold">Address:</span> Jauharabd District khushab
            </p>
            <p className="text-sm">
              <span className="font-semibold">Email:</span> shamiahtisham909@gmail.com
            </p>
            <p className="text-sm">
              <span className="font-semibold">Phone:</span> 03219350989
            </p>
            <p className="text-sm">
              <span className="font-semibold">Freelance:</span> <span className="text-yellow-500">Available</span>
            </p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="w-full max-w-4xl mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Technical Skills */}
        <div className="bg-[#2a2a2a] p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Technical Skills</h2>
          <div className="space-y-4">
            {[{ skill: "Adobe Photoshop", percentage: 80 }, { skill: "Illustrator", percentage: 70 }, { skill: "Social Media Management", percentage: 75 }].map(
              ({ skill, percentage }, index) => (
                <div key={index}>
                  <p className="text-sm">{skill}</p>
                  <div className="w-full bg-gray-600 h-2 rounded mt-1">
                    <div className={`h-2 bg-yellow-500 rounded`} style={{ width: `${percentage}%` }}></div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="bg-[#2a2a2a] p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Soft Skills</h2>
          <div className="space-y-4">
            {[{ skill: "Communication", percentage: 85 }, { skill: "Language", percentage: 75 }, { skill: "General Knowledge", percentage: 65 }].map(
              ({ skill, percentage }, index) => (
                <div key={index}>
                  <p className="text-sm">{skill}</p>
                  <div className="w-full bg-gray-600 h-2 rounded mt-1">
                    <div className={`h-2 bg-white rounded`} style={{ width: `${percentage}%` }}></div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="w-full max-w-4xl bg-[#2a2a2a] p-6 rounded-lg shadow-md mt-10">
        <h2 className="text-xl font-semibold mb-4">Education</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>B.S.C.S (Virtual University) - Ongoing</li>
          <li>I.C.S (B.I.S.E Sargodha) - 2020</li>
          <li>Matriculation (B.I.S.E Sargodha) - 2018</li>
        </ul>
      </div>

      {/* Experience Section */}
      <div className="w-full max-w-4xl bg-[#2a2a2a] p-6 rounded-lg shadow-md mt-6">
        <h2 className="text-xl font-semibold mb-4">Experience</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>1 Year as Computer Operator & Graphic Designer at Career Group of Colleges</li>
          <li>3 Months as Computer Operator & Graphic Designer at Forces School & College System</li>
          <li>3 Months as Digital Trainee Machine Operator at Masood Textile Mills</li>
          <li>1 Year as Social Media Marketer & Graphic Designer at Insaf Estate Builder and Town Planners</li>
          <li>Senior Graphic Designer at City Flex Jauharabad</li>
        </ul>
      </div>


    </div>
  );
};

export default About;
