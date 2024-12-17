import React from "react";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { SiPhp, SiLaravel, SiCss3, SiAdobephotoshop, SiAdobexd, SiFigma } from "react-icons/si";
import { TbBrandAdobeIllustrator } from "react-icons/tb";

// JSON Data
const resumeData = {
  education: [
    { title: "Masters of Business", field: "Management", year: "2011 - 2013" },
    { title: "Honours of Business", field: "Management", year: "2011 - 2013" },
    { title: "School Certificate", field: "Business", year: "2011 - 2013" },
  ],
  experience: [
    { title: "Envato Author", field: "Management", year: "2011 - 2013" },
    { title: "IT International", field: "Management", year: "2011 - 2013" },
    { title: "Daffodil International", field: "Business", year: "2011 - 2013" },
  ],
  programmingSkills: [
    { title: "HTML", value: 80, icon: <AiFillHtml5 /> },
    { title: "Php", value: 90, icon: <SiPhp /> },
    { title: "Laravel", value: 90, icon: <SiLaravel /> },
    { title: "CSS", value: 95, icon: <SiCss3 /> },
  ],
  designingSkills: [
    { title: "Adobe Photoshop", value: 80, icon: <SiAdobephotoshop /> },
    { title: "Adobe Illustrator", value: 90, icon: <TbBrandAdobeIllustrator /> },
    { title: "Adobe XD", value: 90, icon: <SiAdobexd /> },
    { title: "Figma", value: 95, icon: <SiFigma /> },
  ],
};

const Resume = () => {
  return (
    <div className="h-screen text-white py-16 px-12 lg:px-24 overflow-y-auto">
      {/* Resume Header */}
      <h1 className="text-5xl font-bold text-center mb-8">Resume</h1>
      <p className="text-gray-400 text-center mb-10 px-6 md:px-16 lg:px-32">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quasi atque error officiis. Perspiciatis officiis doloremque ut corporis dicta harum!
      </p>

      {/* Education & Experience */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Education */}
        <div>
          <h2 className="text-yellow-400 text-3xl font-semibold mb-6 flex items-center gap-2">
            <FaGraduationCap /> Education
          </h2>
          <ul>
            {resumeData.education.map((edu, idx) => (
              <li key={idx} className="mb-6">
                <h3 className="text-xl font-bold">{edu.title}</h3>
                <p className="text-gray-400">{edu.field}</p>
                <span className="text-sm text-gray-500">{edu.year}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Experience */}
        <div>
          <h2 className="text-yellow-400 text-3xl font-semibold mb-6 flex items-center gap-2">
            <FaBriefcase /> Experience
          </h2>
          <ul>
            {resumeData.experience.map((exp, idx) => (
              <li key={idx} className="mb-6">
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <p className="text-gray-400">{exp.field}</p>
                <span className="text-sm text-gray-500">{exp.year}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Skills Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Programming Skills */}
        <div>
          <h2 className="text-yellow-400 text-3xl font-semibold mb-6">Programming Skills</h2>
          <ul>
            {resumeData.programmingSkills.map((skill, idx) => (
              <li key={idx} className="mb-6">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-lg font-semibold">
                    {skill.icon}
                    {skill.title}
                  </span>
                  <span className="text-yellow-400 font-semibold">{skill.value}%</span>
                </div>
                <div className="w-full  h-2 rounded-full mt-2">
                  <div
                    className="h-full bg-yellow-400 rounded-full"
                    style={{ width: `${skill.value}%` }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Designing Skills */}
        <div>
          <h2 className="text-yellow-400 text-3xl font-semibold mb-6">Designing Skills</h2>
          <ul>
            {resumeData.designingSkills.map((skill, idx) => (
              <li key={idx} className="mb-6">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-lg font-semibold">
                    {skill.icon}
                    {skill.title}
                  </span>
                  <span className="text-yellow-400 font-semibold">{skill.value}%</span>
                </div>
                <div className="w-full  h-2 rounded-full mt-2">
                  <div
                    className="h-full bg-yellow-400 rounded-full"
                    style={{ width: `${skill.value}%` }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
