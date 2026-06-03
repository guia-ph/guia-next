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
            className="flex-1 max-w-full text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[80px] font-bold text-text-1-light dark:text-text-1 leading-[1.1] mb-8">
              <span className="block">Your <span className="text-primary-light dark:text-primary">Guide</span> to</span>
              <span className="block"><span className="text-primary-light dark:text-primary">Smarter</span> Remote</span>
              <span className="block">Teams.</span>
            </h1>
            <p className="text-[24px] text-text-1-light/80 dark:text-text-1/80 leading-[1.6] mb-12 max-w-[900px] mx-auto">
              Build momentum with <span className="font-semibold text-text-1-light dark:text-text-1">dependable remote professionals</span> ready to support your business operations, customer experience, and growth.
            </p>
            <Button
              onClick={handleGetStarted}
              title="Get Started – Book a Free Strategy Call"
              classes="px-[2vw] py-[1vw] md:px-[5vw] md:py-[2.5vw] text-[0.9vw] lg:text-[0.85vw] md:text-[3vw] bg-primary-light dark:bg-primary text-bg-1-light dark:text-bg-1 hover:bg-primary-light/90 dark:hover:bg-primary/90 font-semibold"
              btnClasses=""
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
