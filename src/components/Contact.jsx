import React from "react";
import {
  // AiFillLinkedin,
  // AiFillGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { FaDiscord } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
      <Reveal>
        <div className="grid md:grid-cols-2 place-items-center">
          <div>
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">
                About <span>Me</span>
              </h3>
              <p className="text-justify leading-7 w-11/12 mx-auto">
                Dynamic MERN stack developer with strong proficiency in
                JavaScript, backend development (Node.js), and robust
                problem-solving skills. Experienced in creating scalable REST
                APIs, implementing secure authentication/authorization, and
                building modern frontend solutions with React.js and Redux.
                Proficient in MongoDB (Compass and Atlas), SEO optimization, and
                data validation. Seeking opportunities to contribute technical
                expertise to innovative, real-world projects.
              </p>
            </div>

            <div className="flex mt-10 items-center gap-7">
              <div className="bg-gray-800/40 p-4 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  4<span>+</span>
                </h3>
                <p className="text-xs md:text-base">
                  <span>Personal Projects</span>
                </p>
              </div>
            </div>
          </div>

          <div
            action="https://getform.io/f/placeYourEndpointHere"
            method="POST"
            className=" max-w-6xl p-5 md:p-12 text-4xl md:text-6xl text-purple-400 z-20"
            id="form"
          >
            <p className="text-gray-100 font-bold text-xl mb-2">
              Let´s connect!
            </p>

            <div className="flex gap-5">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.linkedin.com/in/md-shagor-a99232266/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineLinkedin />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://discord.com/users/1084476457742512138"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord />
              </motion.a>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
