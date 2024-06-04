import { EXPERIENCES } from "../constants";
import openInNewTab from "../utilities/openLink";

const Experience = () => {
  return (
    <div className="border-b border-gold-200/80 pb-20">
      <h1 className="my-20 text-center text-[38px] font-normal tracking-tight leading-snug lg:text-[46px] bg-clip-text select-none transition-all ease-in-out duration-500 bg-gradient-to-r from-neutral-200 to-neutral-200 bg-[length:200%_100%] bg-left hover:bg-[length:200%_100%] hover:bg-right hover:from-gold-200 hover:via-gold-100 hover:to-gold-200 text-transparent">
        Experience
      </h1>
      <div className="flex flex-col gap-20">
        {EXPERIENCES.map((experience, index) => (
          <div
            className="flex flex-wrap items-center justify-center gap-8"
            key={index}
          >
            <div className="w-full md:w-1/5 flex flex-col items-center justify-center gap-4">
              <img
                src={experience.logo}
                alt={experience.company}
                className="rounded-2xl hover:shadow-lg hover:shadow-gold-200 select-none transition-all ease-in-out duration-300 w-[45%] md:w-[70%] bg-neutral-100 cursor-pointer hover:-translate-y-1 hover:scal-105 max-w-[170px]"
                onClick={() => openInNewTab(experience.link)}
              ></img>
              <p className="text-md font-medium text-gold-200">
                {experience.year}
              </p>
            </div>
            <div className="w-full max-w-xl md:w-3/4">
              <h1 className="mb-4 font-semibold">
                {experience.role} -{" "}
                <span
                  className="text-md text-transparent bg-clip-text bg-gradient-to-r from-gold-200 via-gold-100 to-gold-200 cursor-pointer"
                  onClick={() => openInNewTab(experience.link)}
                >
                  {experience.company}
                </span>
              </h1>
              <p className="mb-2 text-neutral-300">{experience.description}</p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((technology, index) => (
                  <span
                    key={index}
                    className="rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-gold-100"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
