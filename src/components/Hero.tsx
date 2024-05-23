import { HERO_CONTENT } from "../constants";

const Hero = () => {
  return (
    <div className="border-b border-yellow-500 pb-4 md:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full md:w-[60%] lg:w-2/3">
          <div className="flex flex-col items-start">
            <h1 className="pb-4 text-5xl font-light tracking-tight leading-snug lg:text-[56px] bg-transparent bg-clip-text select-none transition-all ease-in-out duration-500 bg-gradient-to-r from-neutral-300 to-neutral-300 bg-[length:200%_100%] bg-left hover:bg-[length:200%_100%] hover:bg-right hover:from-gold-200 hover:via-gold-100 hover:to-gold-200 text-transparent">
              Soumyadeep Kundu
            </h1>
            <span className="bg-gradient-to-r from-gold-200 via-gold-100 to-gold-200 bg-clip-text text-transparent tracking-tight text-2xl select-none">
              Full Stack Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-nromal tracking-tight text-justify">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
