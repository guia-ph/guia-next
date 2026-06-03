'use client';
import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import SectionOpacity from '@/components/ui/SectionOpacity';
import SectionHeader from '@/components/ui/SectionHeader';
import testimonialsData from '@/data/testimonials.json';

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  image: string;
}

interface Props {}

const Testimonials: FC<Props> = () => {
  const TESTIMONIALS: Testimonial[] = testimonialsData;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="border-t border-gray-1-light dark:border-gray-1 bg-bg-1-light dark:bg-bg-1 py-[6vw] md:py-[8vw]">
      <SectionOpacity>
        <div className="container mx-auto px-[12vw] md:px-[4vw] max-w-[1200px]">
          <SectionHeader 
            title="CLIENT SUCCESS STORIES" 
            description="See how businesses like yours have scaled efficiently, reduced costs, and achieved remarkable results with our dedicated remote teams."
          />
          
          <div className="mt-12 lg:mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[600px] md:min-h-[500px]"
            >
              {/* Left side - Large Image */}
              <div className="relative h-full flex items-center">
                <div className="w-full max-w-[400px] aspect-[4/5] rounded-3xl overflow-hidden bg-bg-2-light dark:bg-bg-2">
                  <img 
                    src={currentTestimonial.image} 
                    alt={currentTestimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right side - Content */}
              <div className="flex flex-col justify-center h-full space-y-6 lg:space-y-8">
                <div className="space-y-4 lg:space-y-6">
                  <p className="text-sm font-semibold text-text-1-light/60 dark:text-text-1/60 uppercase tracking-wider">
                    USER STORY
                  </p>
                  
                  <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-text-1-light dark:text-text-1 leading-tight line-clamp-6">
                    {currentTestimonial.quote}
                  </h2>
                </div>

                <div className="pt-6 lg:pt-8 border-t border-gray-1-light/20 dark:border-gray-1/20">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <p className="text-lg font-bold text-text-1-light dark:text-text-1">
                        {currentTestimonial.author}
                      </p>
                      <p className="text-sm text-text-1-light/60 dark:text-text-1/60 mt-1">
                        {currentTestimonial.position}
                      </p>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-3">
                      <button
                        onClick={prevTestimonial}
                        className="w-12 h-12 rounded-full border border-gray-1-light dark:border-gray-1 flex items-center justify-center hover:bg-bg-2-light dark:hover:bg-bg-2 transition-colors"
                        aria-label="Previous testimonial"
                      >
                        <ChevronLeft className="w-5 h-5 text-text-1-light dark:text-text-1" />
                      </button>
                      <button
                        onClick={nextTestimonial}
                        className="w-12 h-12 rounded-full bg-primary-light dark:bg-primary flex items-center justify-center hover:opacity-90 transition-opacity shadow-lg"
                        aria-label="Next testimonial"
                      >
                        <ChevronRight className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Progress Indicators */}
                <div className="flex gap-2 pt-2 lg:pt-4">
                  {TESTIMONIALS.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-1 rounded-full transition-all ${
                        index === currentIndex 
                          ? 'w-8 bg-primary-light dark:bg-primary' 
                          : 'w-1 bg-gray-1-light dark:bg-gray-1'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          </div>
        </div>
      </SectionOpacity>
    </section>
  );
};

export default Testimonials;
