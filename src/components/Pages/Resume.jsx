import React from "react";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { SiAdobephotoshop, SiAdobexd, SiFigma } from "react-icons/si";
import { TbBrandAdobeIllustrator } from "react-icons/tb";

// JSON Data
const resumeData = {
  personalInfo: {
    name: "Muhammad Ahtisham",
    email: "mahtisham909@gmail.com",
    phone: "+92305-7256494, +92321-9350989",
    address: "Chak No 11/50MB, Jauharabad, Pakistan",
    objective:
      "On the way to be part of a self-motivated group, where I can develop my skills and expertise to excel as a devoted, committed, and inventive professional.",
  },
  education: [
    { degree: "B.S.C.C", year: "2020", institute: "Virtual University", status: "Continue" },
    { degree: "I.C.S", year: "2020", institute: "B.I.S.E Sargodha", marks: 765 },
    { degree: "Matric", year: "2018", institute: "B.I.S.E Sargodha", marks: 931 },
  ],
  experience: [
    { title: "Computer Operator & Graphic Designer", organization: "Career Group of Colleges", year: "1 Year" },
    { title: "Trainee Machine Operator", organization: "Masood Textile Mills", year: "3 Months" },
    { title: "Social Media Marketer & Graphic Designer", organization: "Insaf Estate Builders", year: "1 Year" },
  ],
  skills: [
    "Adobe Photoshop",
    "Adobe Illustrator",
    "CorelDraw",
    "MS Office",
    "Typing Speed: 40WPM",
  ],
  languages: ["English", "Urdu", "Punjabi"],
};

const Resume = () => {
  return (
    <div className="h-screen text-gray-200 py-16 px-8 lg:px-24 overflow-y-auto">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-yellow-400 mb-4">
        {resumeData.personalInfo.name}
      </h1>
      <p className="text-center text-gray-400 mb-8">{resumeData.personalInfo.email}</p>
      <p className="text-center text-gray-400 mb-10">{resumeData.personalInfo.phone}</p>

      {/* Career Objective */}
      <div className="mb-12">
        <h2 className="text-yellow-400 text-2xl font-semibold mb-4">Career Objective</h2>
        <p className="text-gray-400">{resumeData.personalInfo.objective}</p>
      </div>

      {/* Education */}
      <div className="mb-12">
        <h2 className="text-yellow-400 text-2xl font-semibold mb-4">Education</h2>
        <ul>
          {resumeData.education.map((edu, idx) => (
            <li key={idx} className="mb-4">
              <h3 className="font-semibold">{edu.degree}</h3>
              <p className="text-gray-400">{edu.institute}</p>
              <span className="text-sm text-gray-500">
                {edu.year} {edu.marks ? `| Marks: ${edu.marks}` : ""}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Experience */}
      <div className="mb-12">
        <h2 className="text-yellow-400 text-2xl font-semibold mb-4">Experience</h2>
        <ul>
          {resumeData.experience.map((exp, idx) => (
            <li key={idx} className="mb-4">
              <h3 className="font-semibold">{exp.title}</h3>
              <p className="text-gray-400">{exp.organization}</p>
              <span className="text-sm text-gray-500">{exp.year}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Skills */}
      <div className="mb-12">
        <h2 className="text-yellow-400 text-2xl font-semibold mb-4">Skills</h2>
        <ul className="list-disc pl-4">
          {resumeData.skills.map((skill, idx) => (
            <li key={idx} className="text-gray-400">{skill}</li>
          ))}
        </ul>
      </div>

      {/* Languages */}
      <div>
        <h2 className="text-yellow-400 text-2xl font-semibold mb-4">Languages</h2>
        <ul className="list-disc pl-4">
          {resumeData.languages.map((language, idx) => (
            <li key={idx} className="text-gray-400">{language}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Resume;
