'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';

import SectionHeader from '@/components/ui/SectionHeader';
import SectionOpacity from '@/components/ui/SectionOpacity';
import { CLIENT_INDUSTRIES } from '@/data';

interface Props {}

const Clients: FC<Props> = () => {
  return (
    <section id="clients" className="border-t border-gray-1-light dark:border-gray-1 bg-bg-1-light dark:bg-bg-1 py-[6vw] md:py-[4vw]">
      <SectionOpacity>
        <div className="container mx-auto px-[12vw] md:px-[4vw] max-w-[1400px]">
          <SectionHeader 
            title="WHO ARE OUR CLIENTS?"
            description="From Small Businesses to Larger Enterprises, we serve clients in a wide variety of industries. We understand the unique challenges each industry faces and provide tailored outsourcing services that help your business thrive."
          />
          <div className="pb-[5vw]">
          <div className="max-w-[80vw] md:max-w-full mx-auto">
            
            <div className="grid grid-cols-2 md:grid-cols-1 gap-6 mt-[3vw]">
              {CLIENT_INDUSTRIES.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card border border-border rounded-xl p-6 hover:border-primary-light/50 dark:hover:border-primary/50 transition-all duration-300 h-full flex flex-col"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-base text-secondary leading-tight">
                        {industry.name}
                      </h3>
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-light/10 dark:bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary-light dark:text-primary" />
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground flex-grow">
                      {industry.desc}
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
