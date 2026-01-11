import { useState, useEffect } from "react";
import profilepic1 from "../assets/sg1.png";
import profilepic2 from "../assets/sg2.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import sagor from "../assets/sagor.pdf";
import resume from "../assets/resume.pdf";

import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { DiJavascript1, DiNodejsSmall, DiReact } from "react-icons/di";
import { SiTypescript, SiNextdotjs } from "react-icons/si";
import { FaDiscord } from "react-icons/fa";
import { motion } from "framer-motion";

const photos = [profilepic1, profilepic2];

const Hero = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HERO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <TypeAnimation
              sequence={[
                "Fullstack Developer",
                1200,
                "Frontend Developer",
                1200,
                "Backend Developer",
                1200,
              ]}
              speed={50}
              repeat={Infinity}
              className="text-gray-400 font-semibold text-lg sm:text-xl md:text-3xl mb-4"
            />

            <h1 className="text-gray-200 font-bold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6">
              HEY, I AM <br />
              <span className="text-purple-500">Shagor Mia</span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-xl mb-8">
              Passionate full-stack developer building scalable web applications
              using React, Next.js, TypeScript, Node.js, Express, MongoDB &
              MySQL.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8">
              {[
                { label: "Resume", file: resume },
                { label: "View CV", file: sagor },
              ].map((item) => (
                <motion.a
                  key={item.label}
                  whileHover={{ scale: 1.05 }}
                  href={item.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center font-semibold text-gray-200 px-6 py-3 border border-purple-400 rounded-xl hover:bg-purple-400/10 transition"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-6 text-3xl sm:text-4xl md:text-5xl text-purple-400">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://github.com/Shagor-Mia"
                target="_blank"
              >
                <AiOutlineGithub />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.linkedin.com/in/md-shagor-a99232266/"
                target="_blank"
              >
                <AiOutlineLinkedin />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://discord.com/users/1084476457742512138"
                target="_blank"
              >
                <FaDiscord />
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div className="mx-auto w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden">
            <motion.img
              key={currentPhotoIndex}
              src={photos[currentPhotoIndex]}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </motion.div>
        </div>
        {/* TECH STACK */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-24 flex flex-col items-center"
        >
          <h2 className="text-gray-200 text-3xl sm:text-4xl md:text-5xl mb-8">
            My Tech Stack
          </h2>

          <div className="flex flex-wrap justify-center gap-6 text-5xl sm:text-6xl">
            <DiJavascript1 className="text-yellow-500" />
            <SiTypescript className="text-blue-500" />
            <SiNextdotjs className="text-white" />
            <DiReact className="text-blue-500" />
            <DiNodejsSmall className="text-green-500" />
          </div>
        </motion.div>
        {/* SHINY EFFECT (DESKTOP ONLY) */}
        <div className="hidden md:block absolute inset-0 pointer-events-none">
          <ShinyEffect left={0} top={0} size={1400} />
        </div>{" "}
      </div>
    </section>
  );
};

export default Hero;
