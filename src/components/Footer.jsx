import { FaGithubSquare, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12">
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
            href="https://www.instagram.com/md.sagor.549668/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineInstagram />
          </motion.a>
        </div>
      </div>

      <p className="text-gray-400">@2025 sagor</p>
    </div>
  );
};

export default Footer;
