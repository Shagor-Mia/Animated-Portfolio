import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
} from "react-icons/di";
import {
  SiTailwindcss,
  SiExpress,
  SiNestjs,
  SiTypescript,
  SiMysql,
  SiNextdotjs,
  SiRender,
  SiNetlify,
} from "react-icons/si";
import Reveal from "./Reveal";
import { Link } from "react-scroll";
// import { TbBrandRedux } from "react-icons/tb";
import { RiFirebaseFill, RiVercelLine } from "react-icons/ri";
import { FaDocker } from "react-icons/fa6";

const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "HTML", icon: <DiHtml5 className="text-orange-600" /> },
      { name: "CSS", icon: <DiCss3 className="text-blue-600" /> },

      { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },

      {
        name: "JavaScript",
        icon: <DiJavascript1 className="text-yellow-500" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500" />,
      },
      {
        name: "Firebase",
        icon: <RiFirebaseFill className="text-yellow-500" />,
      },
      { name: "React", icon: <DiReact className="text-blue-500" /> },
      {
        name: "Next js",
        icon: <SiNextdotjs className="text-white" />,
      },
      {
        name: "Netlify",
        icon: <SiNetlify className="text-blue-500" />,
      },
      {
        name: "vercel",
        icon: <RiVercelLine className="text-white" />,
      },
    ],
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node Js", icon: <DiNodejsSmall className="text-green-500" /> },
      { name: "Express", icon: <SiExpress className="text-gray-300" /> },
      { name: "Nest js", icon: <SiNestjs className="text-red-500" /> },
      {
        name: "JavaScript",
        icon: <DiJavascript1 className="text-yellow-500" />,
      },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "MongoDB", icon: <DiMongodb className="text-green-600" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
      { name: "Docker", icon: <FaDocker className="text-blue-600" /> },
      { name: "vercel", icon: <RiVercelLine className="text-white" /> },
      { name: "render", icon: <SiRender className="text-white" /> },
    ],
  },
];

const Skills = () => {
  return (
    <div
      className="max-w-[650px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12"
      id="skills"
    >
      <Reveal>
        <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
        <p className="text-center mb-8">
          I worked on various frontend and fullstack projects. Check them{" "}
          <Link to="portfolio" className="underline">
            there
          </Link>
          .
        </p>

        <div
          className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8
                        "
        >
          {skills.map((skill, index) => (
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

export default Skills;
