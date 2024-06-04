import { FaEnvelope, FaPhoneVolume } from "react-icons/fa6";
import openInNewTab from "../utilities/openLink";

const Contact = () => {
  return (
    <div className="pb-20">
      <h1 className="mt-20 text-center text-[38px] font-normal tracking-tight leading-snug lg:text-[46px] bg-clip-text select-none transition-all ease-in-out duration-500 bg-gradient-to-r from-neutral-200 to-neutral-200 bg-[length:200%_100%] bg-left hover:bg-[length:200%_100%] hover:bg-right hover:from-gold-200 hover:via-gold-100 hover:to-gold-200 text-transparent">
        Get in Touch
      </h1>
      <div className="flex flex-row flex-wrap items-center justify-center gap-[40px] mt-20">
        <div className="group rounded-2xl p-[2px] bg-transparent hover:bg-gradient-to-r hover:from-gold-200 hover:via-gold-100 hover:to-gold-200 hover:scale-105 hover:shadow-gold-200 hover:shadow-lg transition-all duration-300 ease-in-out max-w-[100%]">
          <div
            className="flex flex-row flex-wrap justify-center items-center gap-3 cursor-pointer py-4 px-6 bg-transparent group-hover:bg-neutral-800 rounded-2xl transition-all duration-0 ease-in-out"
            onClick={() => openInNewTab("mailto:soumyadeep.30505@gmail.com")}
          >
            <span className="text-[25px] group-hover:text-gold-200">
              <FaEnvelope />
            </span>
            <p className="truncate">soumyadeep.30505@gmail.com</p>
          </div>
        </div>

        <div className="group rounded-2xl p-[2px] bg-transparent hover:bg-gradient-to-r hover:from-gold-200 hover:via-gold-100 hover:to-gold-200 hover:scale-105 hover:shadow-gold-200 hover:shadow-lg transition-all duration-300 ease-in-out max-w-[100%]">
          <div
            className="flex flex-row flex-wrap justify-center items-center gap-3 cursor-pointer py-4 px-6 bg-transparent group-hover:bg-neutral-800 rounded-2xl transition-all duration-0 ease-in-out"
            onClick={() => openInNewTab("tel:+91-8617785546")}
          >
            <span className="text-[25px] group-hover:text-gold-200">
              <FaPhoneVolume />
            </span>
            <p className="truncate">+91-8617785546</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
