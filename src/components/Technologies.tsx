import Icon from "./Icon";

const Technologies = () => {
  const icons = [
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg",
      link: "https://html.spec.whatwg.org",
      alt: "HTML5 Logo",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
      link: "https://www.w3.org/Style/CSS",
      alt: "CSS3 Logo",
    },
    {
      logo: "https://nodejs.org/static/logos/jsIconGreen.svg",
      link: "https://nodejs.org",
      alt: "Node.js Logo",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
      link: "https://www.typescriptlang.org",
      alt: "TypeScript Logo",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      link: "https://react.dev",
      alt: "React Logo",
    },
    {
      logo: "https://svgshare.com/i/16Uj.svg",
      link: "https://www.mongodb.com",
      alt: "MongoDB Logo",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      link: "https://tailwindcss.com/",
      alt: "Tailwind CSS Logo",
    },
    {
      logo: "https://www.vectorlogo.zone/logos/java/java-icon.svg",
      link: "https://www.java.com",
      alt: "Java Logo",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg",
      link: "https://www.open-std.org/jtc1/sc22/wg14",
      alt: "C Logo",
    },
  ];

  return (
    <div className="border-b border-gold-200 pb-24">
      <h1 className="my-20 text-center text-[38px] font-normal tracking-tight leading-snug lg:text-[46px] bg-clip-text select-none transition-all ease-in-out duration-500 bg-gradient-to-r from-neutral-200 to-neutral-200 bg-[length:200%_100%] bg-left hover:bg-[length:200%_100%] hover:bg-right hover:from-gold-200 hover:via-gold-100 hover:to-gold-200 text-transparent">
        Technologies
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-6 select-none">
        {icons.map((icon) => (
          <Icon size={80} link={icon.link}>
            <img className="size-[40px]" src={icon.logo} alt={icon.alt}></img>
          </Icon>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
