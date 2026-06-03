'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';

import SectionHeader from '@/components/ui/SectionHeader';
import SectionOpacity from '@/components/ui/SectionOpacity';
import { BENEFITS } from '@/data';

interface Props {}

const Benefits: FC<Props> = () => {
  const topCards = BENEFITS.slice(0, 2);
  const bottomCards = BENEFITS.slice(2, 5);

  return (
    <section id="benefits" className="border-t border-gray-1-light dark:border-gray-1 bg-bg-1-light dark:bg-bg-1 py-[6vw] md:py-[8vw]">
      <SectionOpacity>
        <div className="container mx-auto px-[12vw] md:px-[4vw] max-w-[1400px]">
          <SectionHeader 
            title="WHY PARTNER WITH US"
            description="We're committed to your success. With us, it's not just about staffing—it's about forging partnerships built on trust, excellence, and measurable outcomes."
          />
          <div className="pb-[5vw]">

            {/* Mobile: Uniform single column */}
            <div className="grid grid-cols-1 gap-[4vw] lg:hidden">
              {BENEFITS.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-bg-2-light dark:bg-bg-2 border border-gray-1-light dark:border-gray-1 rounded-[2vw] p-[5vw] hover:border-primary-light/50 dark:hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-[4.5vw] font-bold text-text-1-light dark:text-text-1 mb-[2vw]">
                    {benefit.title}
                  </h3>
                  <p className="text-[3.2vw] text-text-1-light/70 dark:text-text-1/70 leading-[1.6] mb-[4vw]">
                    {benefit.description}
                  </p>
                  <div className="mt-auto">
                    <img 
                      src={benefit.image} 
                      alt={benefit.title}
                      className="w-full h-auto rounded-[1.5vw] object-cover"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Desktop: Bento grid layout */}
            <div className="hidden lg:block space-y-[1vw]">
              <div className="grid grid-cols-2 gap-[1vw]">
                {topCards.map((benefit, index) => {
                  const blueShades = [
                    'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/40 dark:to-blue-900/40',
                    'bg-gradient-to-br from-sky-50 to-sky-100 dark:from-sky-950/40 dark:to-sky-900/40',
                  ];
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`${blueShades[index]} border border-blue-200/50 dark:border-blue-800/50 rounded-[0.8vw] p-[2.5vw] hover:border-blue-400/50 dark:hover:border-blue-600/50 hover:shadow-lg transition-all duration-300`}
                    >
                      <h3 className="text-[1.4vw] lg:text-[1.2vw] font-bold text-blue-900 dark:text-blue-100 mb-[0.8vw]">
                        {benefit.title}
                      </h3>
                      <p className="text-[1vw] lg:text-[0.9vw] text-blue-800/80 dark:text-blue-200/80 leading-[1.6] mb-[2vw]">
                        {benefit.description}
                      </p>
                      <div className="mt-auto">
                        <img 
                          src={benefit.image} 
                          alt={benefit.title}
                          className="w-full h-auto rounded-[0.5vw] object-cover"
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="grid grid-cols-3 gap-[1vw]">
                {bottomCards.map((benefit, index) => {
                  const blueShades = [
                    'bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-950/40 dark:to-indigo-900/40',
                    'bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-950/40 dark:to-cyan-900/40',
                    'bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/40 dark:to-blue-800/40',
                  ];
                  const borderColors = [
                    'border-indigo-200/50 dark:border-indigo-800/50 hover:border-indigo-400/50 dark:hover:border-indigo-600/50',
                    'border-cyan-200/50 dark:border-cyan-800/50 hover:border-cyan-400/50 dark:hover:border-cyan-600/50',
                    'border-blue-200/50 dark:border-blue-800/50 hover:border-blue-400/50 dark:hover:border-blue-600/50',
                  ];
                  const textColors = [
                    'text-indigo-900 dark:text-indigo-100',
                    'text-cyan-900 dark:text-cyan-100',
                    'text-blue-900 dark:text-blue-100',
                  ];
                  const descColors = [
                    'text-indigo-800/80 dark:text-indigo-200/80',
                    'text-cyan-800/80 dark:text-cyan-200/80',
                    'text-blue-800/80 dark:text-blue-200/80',
                  ];
                  return (
                    <motion.div
                      key={index + 2}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: (index + 2) * 0.1 }}
                      className={`${blueShades[index]} border ${borderColors[index]} rounded-[0.8vw] p-[2.5vw] hover:shadow-lg transition-all duration-300`}
                    >
                      <h3 className={`text-[1.4vw] lg:text-[1.2vw] font-bold ${textColors[index]} mb-[0.8vw]`}>
                        {benefit.title}
                      </h3>
                      <p className={`text-[1vw] lg:text-[0.9vw] ${descColors[index]} leading-[1.6] mb-[2vw]`}>
                        {benefit.description}
                      </p>
                      <div className="mt-auto">
                        <img 
                          src={benefit.image} 
                          alt={benefit.title}
                          className="w-full h-auto rounded-[0.5vw] object-cover"
                        />
                      </div>
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

export default Benefits;
