'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

const Hero = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/book'); 
  };

  return (
    <section id="main" className="relative min-h-screen flex items-center overflow-hidden">

      <div className="container mx-auto px-[12vw] md:px-[4vw] py-[6vw] md:py-[8vw] max-w-[1400px] relative z-10">
        <div className="flex items-center justify-between gap-[8vw] md:flex-col md:gap-[6vw]">
          {/* Left side - Content */}
          <motion.div 
            className="flex-1 max-w-[50vw] md:max-w-full"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[2.5vw] lg:text-[3vw] md:text-[7vw] font-bold text-text-1-light dark:text-text-1 leading-[1.1] mb-[1.5vw] md:mb-[4vw]">
              Your Guide to Smarter Remote Teams.
            </h1>
            <p className="text-[1.1vw] lg:text-[1vw] md:text-[4vw] text-text-1-light/80 dark:text-text-1/80 leading-[1.5] mb-[2vw] md:mb-[6vw]">
              Build momentum with dependable remote professionals ready to support your business operations, customer experience, and growth.
            </p>
            <Button
              onClick={handleGetStarted}
              title="Get Started – Book a Free Strategy Call"
              classes="px-[2vw] py-[1vw] md:px-[5vw] md:py-[2.5vw] text-[0.9vw] lg:text-[0.85vw] md:text-[3vw] bg-primary-light dark:bg-primary text-bg-1-light dark:text-bg-1 hover:bg-primary-light/90 dark:hover:bg-primary/90 font-semibold"
              btnClasses=""
            />
          </motion.div>

          {/* Right side - CEO Image */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full">
              <img 
                src='/images/allain-prof.webp'
                alt="CEO" 
                className="w-full h-full lg:ml-[15%]"
              />
            </div>
            <div className="mt-[1.5vw] md:mt-[3vw] text-center">
              <p className="text-[1vw] lg:text-[0.9vw] md:text-[3.5vw] font-semibold text-text-1-light dark:text-text-1">Allain Zenith Sabandal</p>
              <p className="text-[0.85vw] lg:text-[0.75vw] md:text-[2.8vw] text-text-1-light/70 dark:text-text-1/70">Founder & CEO</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
