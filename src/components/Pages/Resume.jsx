import React from "react";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { SiAdobephotoshop, SiAdobexd, SiFigma } from "react-icons/si";
import { TbBrandAdobeIllustrator } from "react-icons/tb";

// JSON Data
const resumeData = {
  personalInfo: {
    name: "Muhammad Ahtisham",
    email: "shamiahtisham909@gmail.com",
    phone: "+92305-7256494, +92321-9350989",
    address: "Chak No 11/50MB, Jauharabad, Pakistan",
    objective:
      "On the way to be part of a self-motivated group, where I can develop my skills and expertise to excel as a devoted, committed, and inventive professional.",
  },
  education: [
    { degree: "B.S.C.C", year: "2020", institute: "Virtual University", status: "Continue" },
    { degree: "I.C.S", year: "2020", institute: "B.I.S.E Sargodha" },
    { degree: "Matric", year: "2018", institute: "B.I.S.E Sargodha" },
  ],
  experience: [
    { title: "Computer Operator & Graphic Designer", organization: "Career Group of Colleges", year: "1 Year" },
    {
      title: "Trainee Machine Operator",
      organization: "Masood Textile Mills",
      year: "3 Months",
    },
    {
      title: "Social Media Manager & Graphic Designer",
      organization: "Insaf Estate Builders",
      year: "1 Year",
      description:
        "Managed social media campaigns, content creation, and audience engagement while designing promotional graphics to boost brand presence.",
    },
  ],
  skills: [
    "Adobe Photoshop",
    "Adobe Illustrator",
    "CorelDraw",
    "Social Media Management",
    "MS Office",
    "Typing Speed: 40WPM",
  ],
  languages: ["English", "Urdu", "Punjabi"],
};

const Resume = () => {
  return (
    <div className="h-screen text-gray-200 py-16 px-8 lg:px-24 overflow-y-auto bg-gradient-to-r">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">{resumeData.personalInfo.name}</h1>
        <p className="text-xl text-gray-300">{resumeData.personalInfo.email}</p>
        <p className="text-xl text-gray-300 mb-4">{resumeData.personalInfo.phone}</p>
      </div>

      {/* Career Objective */}
      <div className="mb-12">
        <h2 className="text-yellow-400 text-3xl font-semibold mb-4 flex items-center">
          <FaBriefcase className="mr-2" />
          Career Objective
        </h2>
        <p className="text-gray-300">{resumeData.personalInfo.objective}</p>
      </div>

      {/* Education */}
      <div className="mb-12">
        <h2 className="text-yellow-400 text-3xl font-semibold mb-4 flex items-center">
          <FaGraduationCap className="mr-2" />
          Education
        </h2>
        <ul>
          {resumeData.education.map((edu, idx) => (
            <li key={idx} className="mb-4 p-4 bg-gray-700 rounded-lg shadow-lg">
              <h3 className="font-semibold text-xl text-yellow-300">{edu.degree}</h3>
              <p className="text-gray-400">{edu.institute}</p>
              <span className="text-sm text-gray-500">{edu.year}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Experience */}
      <div className="mb-12">
        <h2 className="text-yellow-400 text-3xl font-semibold mb-4 flex items-center">
          <FaBriefcase className="mr-2" />
          Experience
        </h2>
        <ul>
          {resumeData.experience.map((exp, idx) => (
            <li key={idx} className="mb-4 p-4 bg-gray-700 rounded-lg shadow-lg">
              <h3 className="font-semibold text-xl text-yellow-300">{exp.title}</h3>
              <p className="text-gray-400">{exp.organization}</p>
              <span className="text-sm text-gray-500">{exp.year}</span>
              {exp.description && <p className="text-gray-400 mt-2">{exp.description}</p>}
            </li>
          ))}
        </ul>
      </div>

      {/* Skills */}
      <div className="mb-12">
        <h2 className="text-yellow-400 text-3xl font-semibold mb-4 flex items-center">
          <SiAdobephotoshop className="mr-2" />
          Skills
        </h2>
        <ul className="list-disc pl-6">
          {resumeData.skills.map((skill, idx) => (
            <li key={idx} className="text-gray-300">{skill}</li>
          ))}
        </ul>
      </div>

      {/* Languages */}
      <div>
        <h2 className="text-yellow-400 text-3xl font-semibold mb-4 flex items-center">
          <TbBrandAdobeIllustrator className="mr-2" />
          Languages
        </h2>
        <ul className="list-disc pl-6">
          {resumeData.languages.map((language, idx) => (
            <li key={idx} className="text-gray-300">{language}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Resume;
