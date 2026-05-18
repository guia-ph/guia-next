import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  title: string;
  classes?: string;
}

const Index: FC<Props> = ({ title, classes, ...props }) => {
  return (
    <h3 className={`text-[2.5vw] lg:text-[2vw] font-bold leading-[100%] md:text-[8vw] md:text-center ${classes}`} {...props}>
      {title}
    </h3>
  );
};
export default Index;
