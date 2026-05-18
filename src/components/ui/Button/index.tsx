import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  title: string;
  btnClasses?: string;
  classes?: string;
}

const Index: FC<Props> = ({ title, classes, btnClasses, ...props }) => {
  return (
    <button
      className={`relative inline-flex overflow-hidden rounded-full p-[0.2vw] text-[1.2vw] uppercase focus:outline-none focus:ring-1 focus:ring-primary-light dark:focus:ring-primary focus:ring-offset-1 focus:ring-offset-stroke-light dark:focus:ring-offset-stroke ${btnClasses}`}
      {...props}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2.5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#2563EB_0%,#93C5FD_50%,#2563EB_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#A8C5E8_0%,#475569_50%,#A8C5E8_100%)]" />
      <span
        className={`inline-flex h-full min-h-[2.5vw] cursor-pointer  items-center justify-center rounded-full font-semibold text-white backdrop-blur-3xl transition  duration-300 ${classes}`}
      >
        {title}
      </span>
    </button>
  );
};
export default Index;
