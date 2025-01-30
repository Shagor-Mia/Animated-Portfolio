import { DiPython } from "react-icons/di";
import { SiCplusplus, SiMysql } from "react-icons/si"; // Keep these as is
import { FaCogs, FaDatabase } from "react-icons/fa"; // Use FaCogs for C#
import { SiMongodb, SiSublimetext, SiAdobe } from "react-icons/si"; // VS Code, Sublime, MongoDB, Adobe
import { VscVscodeInsiders } from "react-icons/vsc";
import { VscVscode } from "react-icons/vsc";
import { FaGitSquare } from "react-icons/fa";
import { SiCodeblocks } from "react-icons/si";

import Reveal from "./Reveal";

const programmingSkills = [
  {
    category: "Programming",
    technologies: [
      { name: "Python", icon: <DiPython className="text-blue-500" /> },
      { name: "C", icon: <SiCplusplus className="text-green-500" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
      { name: "C#", icon: <FaCogs className="text-purple-700" /> },
    ],
  },
  {
    category: "Databases",
    technologies: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "SQL", icon: <FaDatabase className="text-gray-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
    ],
  },
  {
    category: "Apps",
    technologies: [
      {
        name: "code",
        icon: <VscVscodeInsiders className="text-blue-500" />,
      },
      {
        name: "git",
        icon: <FaGitSquare className="text-white" />,
      },
      {
        name: "studio",
        icon: <VscVscode className="text-purple-500" />,
      },
      {
        name: "Sublime",
        icon: <SiSublimetext className="text-yellow-800" />,
      },
      // {
      //   name: "Pre",
      //   icon: <SiAdobe className="text-purple-800" />,
      // },
      // {
      //   name: "CodeBlock",
      //   icon: <SiCodeblocks className="text-white" />,
      // },
    ],
  },
];

const ProgrammingSkills = () => {
  return (
    <div
      className="max-w-[850px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12"
      id="programming-skills"
    >
      <Reveal>
        <h2 className="text-3xl font-bold mb-4 text-center">
          Programming Skills
        </h2>
        <p className="text-center mb-8">
          I am proficient in multiple programming languages and databases.
        </p>

        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
          {programmingSkills.map((skill, index) => (
            <div
              key={index}
              className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg w-full md:w-1/2"
            >
              <h3 className="text-xl font-bold mb-4 text-center">
                {skill.category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skill.technologies.map((tech, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <span className="text-2xl">{tech.icon}</span>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
};

export default ProgrammingSkills;
