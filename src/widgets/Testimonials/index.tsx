'use client';
import { FC, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import SectionTitle from '@/components/ui/SectionTitle';
import SectionOpacity from '@/components/ui/SectionOpacity';
import testimonialsData from '@/data/testimonials.json';

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  image: string;
}

interface Props {}

const Testimonials: FC<Props> = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const TESTIMONIALS: Testimonial[] = testimonialsData;

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  const allTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="testimonials" className="border-t border-gray-1-light dark:border-gray-1 bg-bg-1-light dark:bg-bg-1 py-[6vw] md:py-[4vw] overflow-hidden">
      <SectionOpacity>
        <div className="container mx-auto px-[12vw] md:px-[4vw] max-w-[1400px]">
          <SectionTitle title="CLIENT SUCCESS STORIES." classes="pt-[3vw]" />
          <div className="pt-[3vw] pb-[5vw] -mx-[12vw] md:-mx-[4vw]">
            <div 
              ref={scrollRef}
              className="flex gap-[2vw] md:gap-[4vw] overflow-x-scroll scrollbar-hide px-[12vw] md:px-[4vw]"
              style={{ scrollBehavior: 'auto' }}
            >
            {allTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % TESTIMONIALS.length) * 0.1 }}
                className="flex-shrink-0 w-[35vw] md:w-[80vw] bg-bg-2-light dark:bg-bg-2 border border-gray-1-light dark:border-gray-1 rounded-[1vw] md:rounded-[2vw] p-[2.5vw] md:p-[5vw]"
              >
                <div className="mb-[2vw] md:mb-[4vw]">
                  <svg className="w-[3vw] h-[3vw] md:w-[6vw] md:h-[6vw] text-primary-light dark:text-primary opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-[1vw] lg:text-[0.9vw] md:text-[3.2vw] text-text-1-light/80 dark:text-text-1/80 leading-[1.6] mb-[2vw] md:mb-[4vw] italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-gray-1-light/30 dark:border-gray-1/30 pt-[1.5vw] md:pt-[3vw] flex items-center gap-[1.5vw] md:gap-[3vw]">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-[4vw] h-[4vw] md:w-[10vw] md:h-[10vw] rounded-full object-cover border-2 border-primary-light/20 dark:border-primary/20"
                  />
                  <div>
                    <p className="text-[1.1vw] lg:text-[1vw] md:text-[3.5vw] font-semibold text-text-1-light dark:text-text-1">
                      {testimonial.author}
                    </p>
                    <p className="text-[0.9vw] lg:text-[0.8vw] md:text-[2.8vw] text-text-1-light/60 dark:text-text-1/60">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        </div>
      </SectionOpacity>
    </section>
  );
};

export default Testimonials;
