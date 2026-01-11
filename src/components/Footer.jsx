import { FaGithubSquare, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1300px] mx-auto flex gap-5 justify-between p-6 md:p-20 text-sm md:text-lg mt-12">
      <div className="space-y-4">
        <h3 className="text-2xl text-gray-200 font-semibold">Md. Sagor</h3>
        <div className="flex flex-row gap-6 text-gray-400 text-4xl">
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://github.com/Shagor-Mia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineGithub />
          </motion.a>
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

      <p className="text-gray-400 flex gap-5 items-center justify-center">
        {" "}
        <span>
          <a href="#" className="text-xl hidden md:block sm:text-2xl font-bold">
            <img src="/public/SM.jpg" className=" w-10 rounded-full" alt="" />
          </a>
        </span>
        @2025 All rights shagor.
      </p>
    </div>
  );
};

export default Footer;
