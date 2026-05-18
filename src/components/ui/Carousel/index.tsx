'use client';

import { FC, useState, useEffect, useCallback, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  children: ReactNode[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showControls?: boolean;
  showIndicators?: boolean;
  className?: string;
}

export const Carousel: FC<CarouselProps> = ({
  children,
  autoPlay = false,
  autoPlayInterval = 5000,
  showControls = true,
  showIndicators = true,
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  };

  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % children.length);
  }, [children.length]);

  const goToPrevious = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + children.length) % children.length);
  }, [children.length]);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, goToNext]);

  if (!children || children.length === 0) return null;

  return (
    <div className={`relative w-full ${className}`}>
      <div className="relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="w-full"
          >
            {children[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      {showControls && children.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-[2vw] md:left-[4vw] top-1/2 -translate-y-1/2 z-10 bg-bg-2-light/80 dark:bg-bg-2/80 backdrop-blur-sm border border-gray-1-light dark:border-gray-1 rounded-full p-[1vw] md:p-[2.5vw] hover:bg-primary-light/20 dark:hover:bg-primary/20 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-[2vw] h-[2vw] md:w-[5vw] md:h-[5vw] text-text-1-light dark:text-text-1" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-[2vw] md:right-[4vw] top-1/2 -translate-y-1/2 z-10 bg-bg-2-light/80 dark:bg-bg-2/80 backdrop-blur-sm border border-gray-1-light dark:border-gray-1 rounded-full p-[1vw] md:p-[2.5vw] hover:bg-primary-light/20 dark:hover:bg-primary/20 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-[2vw] h-[2vw] md:w-[5vw] md:h-[5vw] text-text-1-light dark:text-text-1" />
          </button>
        </>
      )}

      {showIndicators && children.length > 1 && (
        <div className="absolute bottom-[2vw] md:bottom-[4vw] left-1/2 -translate-x-1/2 flex gap-[1vw] md:gap-[2vw] z-10">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-[0.6vw] h-[0.6vw] md:w-[2vw] md:h-[2vw] rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-primary-light dark:bg-primary scale-125'
                  : 'bg-gray-1-light/50 dark:bg-gray-1/50 hover:bg-gray-1-light dark:hover:bg-gray-1'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
