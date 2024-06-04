import openInNewTab from "../utilities/openLink";

interface Props {
  size: number;
  link?: string;
  children: React.ReactNode;
}

const Icon = ({ children, size, link }: Props) => {
  return (
    <div
      className={`group rounded-2xl border-neutral-800 border-4 hover:border-0 hover:bg-gradient-to-tr hover:from-gold-200 hover:via-gold-100 hover:to-gold-200 p-0 hover:p-[2.5px] transition-all ease-in-out duration-200 bg-transparent items-center justify-center flex cursor-pointer hover:scale-105`}
      onClick={() => openInNewTab(link)}
    >
      <div
        className={`p-4 rounded-2xl bg-transparent group-hover:bg-neutral-800 items-center justify-center flex w-[${size}px] h-[${size}px]`}
      >
        {children}
      </div>
    </div>
  );
};

export default Icon;
