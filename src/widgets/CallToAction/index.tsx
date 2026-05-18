import { FC } from 'react';
import { useRouter } from 'next/navigation';

import Button from '@/components/ui/Button';
import SectionOpacity from '@/components/ui/SectionOpacity';

interface Props {}

const Index: FC<Props> = () => {
  const router = useRouter();

  const handleFormToggle = () => {
    router.push('/book');
  };

  return (
    <SectionOpacity classes="flex flex-col justify-center h-screen">

      <div className="mx-auto flex w-full max-w-[1400px] px-[12vw] md:px-[4vw] md:max-w-[90%] flex-1 flex-col items-center justify-center text-center">
        <h3 className="text-[2.5vw] lg:text-[2vw] md:text-[8vw] font-bold text-text-1-light dark:text-text-1">READY TO SCALE YOUR TEAM?</h3>
        <p className="mt-[0.6vw] text-[1.1vw] lg:text-[1vw] md:text-[3.2vw] font-normal text-text-1-light/70 dark:text-gray-300 md:leading-[1.3]">
          Book your free strategy call today. Let&apos;s find the perfect virtual assistant to help your business thrive.
        </p>
        <Button
          onClick={handleFormToggle}
          title="BOOK A FREE STRATEGY CALL"
          classes="px-[1.8vw] py-[vw] w-[35vw] md:w-[45vw] min-h-[6vw] md:min-h-[8vw] text-[0.9vw] lg:text-[0.85vw] md:text-[2.25vw] bg-primary-light dark:bg-primary hover:bg-bg-1-light/80 dark:hover:bg-bg-1/80"
          btnClasses="mt-[1.2vw]"
        />
      </div>

      <footer className="flex justify-between border-t border-t-gray-1-light dark:border-t-gray-800 px-[12vw] py-[1.8vw] text-[0.85vw] lg:text-[0.75vw] md:text-[2vw] md:py-[2.4vw] md:px-[4vw] max-w-[1400px] mx-auto w-full">
        <div>© { new Date().getFullYear()} Guia Philippines</div>
        <ul className="flex space-x-[3vw] ">
          {/* <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Contact Us</li> */}
        </ul>
      </footer>
    </SectionOpacity>
  );
};
export default Index;
