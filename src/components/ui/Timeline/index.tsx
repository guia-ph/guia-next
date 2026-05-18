'use client';
import { FC, SVGProps } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/shared/utils';

interface TimelineItem {
  icon: FC<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

interface Props {
  items: TimelineItem[];
}

const   Timeline: FC<Props> = ({ items }) => {
  return (
    <div className="relative">
      <div className="absolute left-[20px] lg:left-[4vw] top-0 bottom-0 w-[2px] lg:w-[0.5vw] bg-gradient-to-b from-primary-light/30 via-primary-light/50 to-primary-light/30 dark:from-primary/30 dark:via-primary/50 dark:to-primary/30" />

      <div className="space-y-8 lg:space-y-[3vw]">
        {items.map((item, index) => {
          const Icon = item.icon;
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative flex items-start gap-4 lg:gap-[4vw]"
            >
              <div className="relative z-10 flex-shrink-0">
                <div className="w-12 h-12 lg:w-[7vw] lg:h-[7vw] rounded-full bg-gradient-to-br from-primary-light to-primary-light/70 dark:from-primary dark:to-primary/70 flex items-center justify-center shadow-lg border-2 lg:border-[0.4vw] border-bg-1-light dark:border-bg-1">
                  <div className="w-9 h-9 lg:w-[5vw] lg:h-[5vw] rounded-full bg-bg-2-light dark:bg-bg-2 flex items-center justify-center">
                    <Icon className="w-5 h-5 lg:w-[2.5vw] lg:h-[2.5vw] text-primary-light dark:text-primary" />
                  </div>
                </div>
                
                <div className="absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] w-16 h-16 lg:w-[9vw] lg:h-[9vw] rounded-full bg-primary-light/10 dark:bg-primary/10 -z-10 animate-pulse" />
              </div>

              <div className="flex-1 pt-1 lg:pt-[0.5vw]">
                <div className="space-y-2 lg:space-y-[1.5vw]">
                  <h3 className="text-xl lg:text-[1.5vw] font-semibold text-text-1-light dark:text-text-1">
                    {item.title}
                  </h3>
                  <p className="text-base lg:text-[1.1vw] text-text-1-light/70 dark:text-text-1/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: items.length * 0.15 }}
        className="mt-12 lg:mt-[6vw] text-center"
      >
        <div className="inline-flex items-center gap-2 lg:gap-[0.8vw] px-4 lg:px-[2vw] py-2 lg:py-[0.8vw] rounded-full bg-gradient-to-r from-primary-light/20 to-primary-light/10 dark:from-primary/20 dark:to-primary/10 border border-primary-light/30 dark:border-primary/30">
          <div className="w-3 h-3 lg:w-[1.2vw] lg:h-[1.2vw] rounded-full bg-primary-light dark:bg-primary animate-pulse" />
          <span className="text-base lg:text-[1.1vw] font-medium text-text-1-light dark:text-text-1">
            Ready to get started?
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default Timeline;
