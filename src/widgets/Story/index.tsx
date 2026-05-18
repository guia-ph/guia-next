'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';

import SectionTitle from '@/components/ui/SectionTitle';
import SectionOpacity from '@/components/ui/SectionOpacity';

interface Props {}

const Story: FC<Props> = () => {
  return (
    <section id="story" className="border-t border-gray-1-light dark:border-gray-1 bg-gradient-to-b from-bg-1-light to-bg-2-light dark:from-bg-1 dark:to-bg-2 py-[6vw] md:py-[4vw]">
      <SectionOpacity>
        <div className="container mx-auto px-[12vw] md:px-[4vw] max-w-[1400px]">
          <SectionTitle title="OUR JOURNEY." classes="pt-[3vw]" />
          <div className="pt-[3vw] pb-[5vw]">
          <div className="max-w-[85vw] md:max-w-full mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-[2vw] lg:text-[1.6vw] md:text-[6vw] font-bold text-text-1-light dark:text-text-1 mb-[2vw] md:mb-[4vw]">
                People-Centered, Performance-Driven
              </h2>
              <p className="text-[1.1vw] lg:text-[1vw] md:text-[3.8vw] text-text-1-light/80 dark:text-text-1/80 leading-[1.6] mb-[3vw] md:mb-[5vw] max-w-[70vw] md:max-w-full mx-auto">
                We're more than a remote staffing solution—we're a catalyst for change. Built on the principle that exceptional talent transcends geographical boundaries, we bridge businesses and visionary leaders with skilled professionals across the globe.
              </p>
              <div className="relative w-full max-w-[60vw] md:max-w-full mx-auto aspect-video rounded-[1vw] md:rounded-[2vw] overflow-hidden bg-bg-2-light dark:bg-bg-2 border-2 border-gray-1-light dark:border-gray-1">
                <img 
                  src="/images/group-photo-1.jpg" 
                  alt="Our Story" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
          </div>
        </div>
        </div>
      </SectionOpacity>
    </section>
  );
};

export default Story;
