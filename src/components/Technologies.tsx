import Icon from "./Icon";
import { TECHNOLOGIES } from "../constants";
import { motion } from "framer-motion";

const iconVariants: any = (duration: number) => ({
  initial: { scale: 0.8 },
  animate: {
    scale: [1, 0.8],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-gold-200/80 pb-20">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.75, ease: "easeInOut" }}
      >
        <h1 className="mt-20 mb-14 text-center text-[38px] font-normal tracking-tight leading-snug lg:text-[46px] bg-clip-text select-none transition-all ease-in-out duration-500 bg-gradient-to-r from-neutral-200 to-neutral-200 bg-[length:200%_100%] bg-left hover:bg-[length:200%_100%] hover:bg-right hover:from-gold-200 hover:via-gold-100 hover:to-gold-200 text-transparent">
          Technologies
        </h1>
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.75, ease: "easeInOut" }}
        className="flex flex-wrap items-center justify-center gap-6 select-none"
      >
        {TECHNOLOGIES.map((icon, index) => (
          <motion.div
            variants={iconVariants(Math.round((Math.random() * 4 + 2) * 2) / 2)}
            initial="initial"
            animate="animate"
          >
            <Icon size={80} link={icon.link}>
              <img
                key={index}
                className="size-[40px]"
                src={icon.logo}
                alt={icon.alt}
              ></img>
            </Icon>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
