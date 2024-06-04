import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Profile Picture.jpg";
import Tilty from "react-tilty";
import isTouchDevice from "../utilities/isTouchDevice";
import { motion } from "framer-motion";

const container = (delay: number) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Hero = () => {
  return (
    <div className="border-b border-gold-200/80 pb-20 mb-20">
      <div className="flex flex-wrap items-center">
        <div className="w-full md:w-[60%] lg:w-2/3 md:pr-8 lg:pr-0">
          <div className="flex flex-col items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-4 text-[42px] font-normal tracking-tight leading-snug lg:text-[56px] bg-transparent bg-clip-text select-none transition-all ease-in-out duration-500 bg-gradient-to-r from-neutral-200 to-neutral-200 bg-[length:200%_100%] bg-left hover:bg-[length:200%_100%] hover:bg-right hover:from-gold-200 hover:via-gold-100 hover:to-gold-200 text-transparent"
            >
              Soumyadeep Kundu
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-gold-200 via-gold-100 to-gold-200 bg-clip-text text-transparent tracking-tight text-2xl select-none"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="mt-2 max-w-[85%] pt-6 font-normal tracking-tight mb-10 md:mb-0 text-balance"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full md:w-[40%] lg:w-1/3 items-center justify-center flex">
          <div className="flex justify-center items-center flex-shrink max-w-[400px]">
            {isTouchDevice == true ? (
              <motion.img
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                src={profilePic}
                alt="Profile Picture"
                className="rounded-3xl hover:shadow-lg hover:shadow-gold-200 select-none transition-all ease-in-out duration-500 justify-center"
              ></motion.img>
            ) : (
              <Tilty speed={500} scale={1.005} perspective={2000}>
                <motion.img
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                  src={profilePic}
                  alt="Profile Picture"
                  className="rounded-3xl hover:shadow-lg hover:shadow-gold-200 select-none transition-all ease-in-out duration-500"
                  data-tilt
                ></motion.img>
              </Tilty>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
