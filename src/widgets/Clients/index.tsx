'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';

import SectionTitle from '@/components/ui/SectionTitle';
import SectionOpacity from '@/components/ui/SectionOpacity';
import { CLIENT_INDUSTRIES } from '@/data';

interface Props {}

const Clients: FC<Props> = () => {
  return (
    <section id="clients" className="border-t border-gray-1-light dark:border-gray-1 bg-bg-1-light dark:bg-bg-1 py-[6vw] md:py-[4vw]">
      <SectionOpacity>
        <div className="container mx-auto px-[12vw] md:px-[4vw] max-w-[1400px]">
          <SectionTitle title="WHO ARE OUR CLIENTS?" classes="pt-[3vw]" />
          <div className="pt-[3vw] pb-[5vw]">
          <div className="max-w-[80vw] md:max-w-full mx-auto">
            <p className="text-[1.1vw] lg:text-[1vw] md:text-[3.8vw] text-text-1-light/80 dark:text-text-1/80 text-center leading-[1.5] mb-[4vw] md:mb-[6vw]">
              From Small Businesses to Larger Enterprises, we serve clients in a wide variety of industries.
              <br />
              We understand the unique challenges each industry faces and provide tailored outsourcing services that help your business thrive.
            </p>
            
            <div className="grid grid-cols-5 md:grid-cols-2 gap-[2vw] md:gap-[3vw] mt-[3vw]">
              {CLIENT_INDUSTRIES.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-bg-2-light dark:bg-bg-2 border border-gray-1-light dark:border-gray-1 rounded-[0.5vw] md:rounded-[1vw] p-[2vw] md:p-[4vw] text-center hover:border-primary-light/50 dark:hover:border-primary/50 hover:bg-bg-2-light/80 dark:hover:bg-bg-2/80 transition-all duration-300 flex flex-col items-center gap-[1vw] md:gap-[2vw]"
                  >
                    <Icon className="w-[2.5vw] h-[2.5vw] md:w-[6vw] md:h-[6vw] text-primary-light dark:text-primary" />
                    <p className="text-[0.9vw] lg:text-[0.85vw] md:text-[3vw] font-normal text-text-1-light dark:text-text-1">
                      {industry.name}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
        </div>
      </SectionOpacity>
    </section>
  );
};

export default Clients;
