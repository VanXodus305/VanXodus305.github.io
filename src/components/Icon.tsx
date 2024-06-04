import openInNewTab from "../utilities/openLink";

interface Props {
  size: number;
  link?: string;
  children: React.ReactNode;
}

const Icon = ({ children, size, link }: Props) => {
  return (
    <div
      className={`group rounded-2xl hover:bg-gradient-to-tr hover:from-gold-200 hover:via-gold-100 hover:to-gold-200 p-0 hover:p-0.5 transition-all ease-in-out duration-300 bg-transparent items-center justify-center flex cursor-pointer`}
      onClick={() => openInNewTab(link)}
    >
      <div
        className={`p-4 rounded-2xl border-4 group-hover:border-0 bg-transparent border-neutral-800 group-hover:bg-neutral-800 items-center justify-center flex w-[${size}px] h-[${size}px] 
        group-hover:w-[${size - 4}px] group-hover:h-[${size - 4}px]`}
      >
        {children}
      </div>
    </div>
  );
};

export default Icon;
