import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import logo from "/logo.svg";

const Navbar = () => {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <nav className="mb-8 flex items-center justify-between py-4 flex-col xs:flex-row select-none">
      <div className="flex flex-shrink-0 items-center justify-center mb-3 xs:mb-0">
        <img src={logo} alt="logo" className="w-24 h-24" />
      </div>
      <div className="flex flex-shrink-0 items-center justify-center gap-7 text-2xl flex-wrap">
        <FaLinkedinIn
          className="cursor-pointer transition-all ease-in-out duration-500 hover:text-yellow-500"
          onClick={() =>
            openInNewTab("https://www.linkedin.com/in/vanxodus305")
          }
        />
        <FaGithub
          className="cursor-pointer transition-all ease-in-out duration-500 hover:text-yellow-500"
          onClick={() => openInNewTab("https://github.com/VanXodus305")}
        />
        <FaInstagram
          className="cursor-pointer transition-all ease-in-out duration-500 hover:text-yellow-500"
          onClick={() => openInNewTab("https://instagram.com/vanxodus305")}
        />
        <FaXTwitter
          className="cursor-pointer transition-all ease-in-out duration-500 hover:text-yellow-500"
          onClick={() => openInNewTab("https://x.com/VanXodus305")}
        />
      </div>
    </nav>
  );
};

export default Navbar;
