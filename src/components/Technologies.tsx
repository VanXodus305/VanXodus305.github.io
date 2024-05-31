import Icon from "./Icon";
import { TECHNOLOGIES } from "../constants";

const Technologies = () => {
  return (
    <div className="border-b border-gold-200/80 pb-20">
      <h1 className="my-20 text-center text-[38px] font-normal tracking-tight leading-snug lg:text-[46px] bg-clip-text select-none transition-all ease-in-out duration-500 bg-gradient-to-r from-neutral-200 to-neutral-200 bg-[length:200%_100%] bg-left hover:bg-[length:200%_100%] hover:bg-right hover:from-gold-200 hover:via-gold-100 hover:to-gold-200 text-transparent">
        Technologies
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-6 select-none">
        {TECHNOLOGIES.map((icon, index) => (
          <Icon size={80} link={icon.link}>
            <img
              key={index}
              className="size-[40px]"
              src={icon.logo}
              alt={icon.alt}
            ></img>
          </Icon>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
