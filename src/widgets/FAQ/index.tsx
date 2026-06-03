'use client';
import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

import SectionHeader from '@/components/ui/SectionHeader';
import SectionOpacity from '@/components/ui/SectionOpacity';
import { FAQ_ITEMS } from '@/data';

interface Props {}

const FAQ: FC<Props> = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="border-t border-gray-1-light dark:border-gray-1 bg-gradient-to-b from-bg-1-light to-bg-1-light dark:from-bg-1 dark:to-bg-1 py-[6vw] md:py-[4vw]">
      <SectionOpacity>
        <div className="container mx-auto px-[12vw] md:px-[4vw] max-w-[1400px]">
          <SectionHeader 
            title="FAQ" 
            description="Got questions? We've got answers. Find everything you need to know about working with our remote professionals and how we can help your business grow."
          />
          <div className="pb-[5vw]">
          <div className="max-w-[70vw] md:max-w-full mx-auto space-y-[1.5vw] md:space-y-[3vw]">
            {FAQ_ITEMS.map((item, index) => (
              <div
                key={index}
                className="border border-gray-1-light dark:border-gray-1 rounded-[0.5vw] md:rounded-[1vw] overflow-hidden bg-bg-2-light/50 dark:bg-bg-2/50 hover:border-primary-light/50 dark:hover:border-primary/50 transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-[2vw] md:p-[4vw] text-left"
                >
                  <h3 className="text-[1.2vw] lg:text-[1.1vw] md:text-[3.5vw] font-semibold text-text-1-light dark:text-text-1 pr-[2vw]">
                    {item.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-[2vw] h-[2vw] md:w-[4vw] md:h-[4vw] text-primary-light dark:text-primary" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-[2vw] pb-[2vw] md:px-[4vw] md:pb-[4vw] pt-0">
                        <p className="text-[1vw] lg:text-[0.9vw] md:text-[3vw] text-text-1-light/80 dark:text-text-1/80 leading-[1.6]">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
        </div>
      </SectionOpacity>
    </section>
  );
};

export default FAQ;
