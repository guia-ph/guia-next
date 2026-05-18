'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';

import SectionTitle from '@/components/ui/SectionTitle';
import SectionOpacity from '@/components/ui/SectionOpacity';
import { HIRING_PROCESS } from '@/data';

interface Props {}

const HiringProcess: FC<Props> = () => {
  return (
    <section id="hiring-process" className="border-t border-gray-1-light dark:border-gray-1 bg-bg-1-light dark:bg-bg-1 py-[6vw] md:py-[4vw]">
      <SectionOpacity>
        <div className="container mx-auto px-[12vw] md:px-[4vw] max-w-[1400px]">
          <SectionTitle title="RECRUIT REMOTE TALENT EFFORTLESSLY." classes="pt-[3vw]" />
          <div className="pt-[3vw] pb-[5vw]">
          <div className="max-w-[85vw] md:max-w-full mx-auto">
            <p className="text-[1.1vw] lg:text-[1vw] md:text-[4vw] text-text-1-light/90 dark:text-text-1/90 leading-[1.5] mb-[5vw] md:mb-[8vw]">
              Securing remote talent is straightforward, efficient, and worry-free with us! Our streamlined approach works for companies of all sizes, whether you're new to remote hiring or a seasoned pro.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-1 gap-[3vw] md:gap-[5vw]">
              {HIRING_PROCESS.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="bg-bg-2-light dark:bg-bg-2 border border-gray-1-light dark:border-gray-1 rounded-[0.8vw] md:rounded-[2vw] p-[2.5vw] md:p-[5vw] hover:border-primary-light/50 dark:hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-[2vw] md:gap-[4vw]">
                    <div className="flex-shrink-0 w-[4vw] h-[4vw] md:w-[10vw] md:h-[10vw] rounded-full bg-primary-light/10 dark:bg-primary/10 flex items-center justify-center">
                      <span className="text-[2vw] md:text-[5vw] font-bold text-primary-light dark:text-primary">
                        {item.step}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[1.4vw] lg:text-[1.2vw] md:text-[4.5vw] font-bold text-text-1-light dark:text-text-1 mb-[1vw] md:mb-[2vw]">
                        {item.title}
                      </h3>
                      <p className="text-[1vw] lg:text-[0.9vw] md:text-[3.2vw] text-text-1-light/70 dark:text-text-1/70 leading-[1.6]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </SectionOpacity>
    </section>
  );
};

export default HiringProcess;
