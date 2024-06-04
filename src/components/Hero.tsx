import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Profile Picture.jpg";
import Tilty from "react-tilty";
import isTouchDevice from "../utilities/isTouchDevice";
import { motion } from "framer-motion";

const container = (position: number, delay?: number) => ({
  hidden: { x: position, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: delay || 0.5,
      ease: "easeInOut",
    },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-gold-200/80 pb-20 mb-20">
      <div className="flex flex-wrap items-center">
        <div className="w-full md:w-[60%] lg:w-2/3 md:pr-8 lg:pr-0">
          <motion.div
            className="flex flex-col items-start"
            variants={container(-100)}
            initial="hidden"
            animate="visible"
          >
            <h1 className="pb-4 text-[42px] font-normal tracking-tight leading-snug lg:text-[56px] bg-transparent bg-clip-text select-none transition-all ease-in-out duration-500 bg-gradient-to-r from-neutral-200 to-neutral-200 bg-[length:200%_100%] bg-left hover:bg-[length:200%_100%] hover:bg-right hover:from-gold-200 hover:via-gold-100 hover:to-gold-200 text-transparent">
              Soumyadeep Kundu
            </h1>
            <span className="bg-gradient-to-r from-gold-200 via-gold-100 to-gold-200 bg-clip-text text-transparent tracking-tight text-2xl select-none">
              Full Stack Developer
            </span>
            <p className="mt-2 max-w-[85%] pt-6 font-normal tracking-tight mb-10 md:mb-0 text-balance">
              {HERO_CONTENT}
            </p>
          </motion.div>
        </div>
        <div className="w-full md:w-[40%] lg:w-1/3 items-center justify-center flex">
          <motion.div
            variants={container(100)}
            initial="hidden"
            animate="visible"
            className="flex justify-center items-center flex-shrink max-w-[400px]"
          >
            {isTouchDevice == true ? (
              <img
                src={profilePic}
                alt="Profile Picture"
                className="rounded-3xl hover:shadow-lg hover:shadow-gold-200 select-none transition-all ease-in-out duration-500 justify-center"
              ></img>
            ) : (
              <Tilty speed={500} scale={1.005} perspective={2000}>
                <img
                  src={profilePic}
                  alt="Profile Picture"
                  className="rounded-3xl hover:shadow-lg hover:shadow-gold-200 select-none transition-all ease-in-out duration-500"
                  data-tilt
                ></img>
              </Tilty>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
