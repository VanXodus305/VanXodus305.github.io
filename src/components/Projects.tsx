import { FaGithub, FaLink } from "react-icons/fa6";
import { PROJECTS } from "../constants";
import openInNewTab from "../utilities/openLink";
import { motion } from "motion/react";

const Projects = () => {
  return (
    <div className="border-b border-gold-200/80 pb-20">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.75, ease: "easeInOut" }}
      >
        <h1 className="mt-20 text-center text-[38px] font-normal tracking-tight leading-snug lg:text-[46px] bg-clip-text select-none transition-all ease-in-out duration-500 bg-gradient-to-r from-neutral-200 to-neutral-200 bg-[length:200%_100%] bg-left hover:bg-[length:200%_100%] hover:bg-right hover:from-gold-200 hover:via-gold-100 hover:to-gold-200 text-transparent">
          Projects
        </h1>
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.75, ease: "easeInOut" }}
        className="flex justify-evenly flex-wrap"
      >
        {PROJECTS.map((project, index) => (
          <div
            className="group bg-transparent hover:border-gold-200 hover:bg-neutral-800 flex flex-col sm:flex-row flex-shrink rounded-2xl max-w-[400px] border-4 border-neutral-800 items-center relative sm:mx-14 mt-[120px] sm:mt-[80px] transition-all ease-in-out duration-300 hover:shadow-gold-200 hover:shadow-lg hover:scale-[102%] cursor-default"
            key={index}
          >
            <div className="flex absolute items-center sm:-left-0 sm:transform sm:-translate-x-1/2 -translate-y-1/2 sm:translate-y-0 group-hover:border-4 group-hover:border-gold-100 rounded-2xl transition-all ease-in-out duration-150 bg-neutral-800 select-none shadow-gold-200 shadow-lg">
              <motion.div
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.75, ease: "easeInOut" }}
              >
                <img
                  className="max-w-[112px] max-h-[112px] rounded-2xl transition-all ease-in-out duration-300 group-hover:blur-sm group-hover:opacity-40 object-cover aspect-square"
                  alt={project.title}
                  src={project.image}
                ></img>
                <span className="flex flex-row gap-4 absolute scale-0 group-hover:scale-100 text-[28px] font-medium text-transparent items-center justify-between transform translate-x-1/2 -left-4 bottom-11 transition-all ease-in-out duration-300">
                  <FaGithub
                    className="hover:text-gold-200 text-neutral-100 transition-all ease-in-out duration-150 cursor-pointer"
                    onClick={() => openInNewTab(project.github)}
                  ></FaGithub>
                  <FaLink
                    className="hover:text-gold-200 text-neutral-100 transition-all ease-in-out duration-150 cursor-pointer"
                    onClick={() => openInNewTab(project.link)}
                  ></FaLink>
                </span>
              </motion.div>
            </div>

            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
              className="flex flex-col ml-6 sm:ml-[90px] mr-6 sm:mt-0 mt-[60px]"
            >
              <span className="mt-6 mb-3">
                <span className="font-semibold text-transparent text-md bg-clip-text bg-gradient-to-r from-gold-200 via-gold-100 to-gold-200">
                  {project.title}
                </span>
              </span>
              <p className="text-balance text-neutral-300 mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((technology, index) => (
                  <span
                    key={index}
                    className="rounded bg-neutral-800 px-2 py-1 text-[12px] font-medium text-gold-100"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
