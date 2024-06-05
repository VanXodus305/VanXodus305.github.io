import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import logo from "/logo.svg";
import openInNewTab from "../utilities/openLink";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="mb-8 flex items-center justify-between py-4 flex-col xs:flex-row select-none"
    >
      <div className="flex flex-shrink-0 items-center justify-center mb-3 xs:mb-0">
        <img src={logo} alt="logo" className="w-24 h-24" />
      </div>
      <div className="flex flex-shrink-0 items-center justify-center gap-7 text-2xl flex-wrap">
        <div className="group relative">
          <FaLinkedinIn
            className="cursor-pointer transition-all ease-in-out duration-300 hover:text-gold-200"
            onClick={() =>
              openInNewTab("https://www.linkedin.com/in/vanxodus305")
            }
          />
          <span className="navbar-tooltip group-hover:scale-100">LinkedIn</span>
        </div>
        <div className="group relative">
          <FaGithub
            className="cursor-pointer transition-all ease-in-out duration-300 hover:text-gold-200"
            onClick={() => openInNewTab("https://github.com/VanXodus305")}
          />
          <span className="navbar-tooltip group-hover:scale-100">GitHub</span>
        </div>
        <div className="group relative">
          <FaInstagram
            className="cursor-pointer transition-all ease-in-out duration-300 hover:text-gold-200"
            onClick={() => openInNewTab("https://instagram.com/vanxodus305")}
          />
          <span className="navbar-tooltip group-hover:scale-100">
            Instagram
          </span>
        </div>
        <div className="group relative">
          <FaXTwitter
            className="cursor-pointer transition-all ease-in-out duration-300 hover:text-gold-200"
            onClick={() => openInNewTab("https://x.com/VanXodus305")}
          />
          <span className="navbar-tooltip group-hover:scale-100">X</span>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
