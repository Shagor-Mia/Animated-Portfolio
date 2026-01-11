import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import SM from "../assets/SM.jpg";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md">
      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 text-gray-200">
          {/* LOGO */}
          <a href="#" className="text-xl sm:text-2xl font-bold">
            <img src={SM} className=" w-10 rounded-full" alt="" />
          </a>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-8 lg:gap-12 text-lg">
            {["skills", "portfolio", "contact"].map((item) => (
              <li
                key={item}
                className="cursor-pointer hover:text-purple-400 transition"
              >
                <Link to={item} smooth offset={-80} duration={500}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setNav(!nav)}
            className="md:hidden z-50 text-gray-200"
            aria-label="Toggle Menu"
          >
            {nav ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#190b1f] border-t border-purple-600/30"
          >
            <ul className="flex flex-col items-center gap-6 py-6 text-lg font-medium text-gray-100">
              {["skills", "portfolio", "contact"].map((item) => (
                <li key={item} onClick={() => setNav(false)}>
                  <Link to={item} smooth offset={-80} duration={500}>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
