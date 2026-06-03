'use client';

import { FC, useState, useEffect, useRef } from 'react';

import SectionOpacity from '@/components/ui/SectionOpacity';
import { Target, Eye } from "lucide-react";
import { AnimatedSection } from '@/components/AnimatedSection';

interface Props {}

const stats = [
  { value: 150, suffix: '+', label: 'Happy Clients' },
  { value: 95, suffix: '%', label: 'Client Retention' },
  { value: 99, suffix: '+', label: 'VAs Placed' },
  { value: 4.9, suffix: '/5', label: 'Average Rating', decimals: 1 },
];

const CountingNumber: FC<{ value: number; suffix: string; decimals?: number }> = ({ value, suffix, decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <span ref={ref}>
      <span>{decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}</span>
      <span>{suffix}</span>
    </span>
  );
};

const Index: FC<Props> = () => {
  return (
    <section id="about" className="border-t border-gray-1-light dark:border-gray-1 bg-gradient-to-b from-bg-1-light to-bg-1-light dark:from-bg-1 dark:to-bg-1 py-[6vw] md:py-[8vw] z-0">
      <SectionOpacity classes='z-2'>
        <div className="container mx-auto px-[12vw] md:px-[4vw] max-w-[1400px]">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Images */}
            <AnimatedSection delay={0.1}>
              <div className="space-y-6">
                <div className="rounded-3xl overflow-hidden bg-bg-2-light dark:bg-bg-2 aspect-[16/9]">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=675&fit=crop" 
                    alt="Team collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden bg-bg-2-light dark:bg-bg-2 aspect-[16/9]">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=675&fit=crop" 
                    alt="Professional workspace"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </AnimatedSection>

            {/* Right side - Content */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-8">
                <div className="text-center sm:text-left">
                  <p className="text-sm font-semibold text-primary-light dark:text-primary uppercase tracking-wider mb-4">
                    Who We Are
                  </p>
                  <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-text-1-light dark:text-text-1 leading-tight mb-6">
                    Your Remote Team Partner
                  </h2>
                  <p className="text-base text-text-1-light/70 dark:text-text-1/70 leading-relaxed">
                    Your remote team shouldn't feel outsourced. Guia connects you with reliable VA engineers and remote professionals in the Philippines who work like an extension of your business.
                  </p>
                </div>

                {/* Mission and Vision Cards */}
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* The Right Fit */}
                  <div className="space-y-4 text-center sm:text-left flex flex-col items-center sm:items-start">
                    <div className="w-14 h-14 rounded-xl bg-primary-light dark:bg-primary flex items-center justify-center">
                      <Target className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-text-1-light dark:text-text-1 mb-2">
                        The Right Fit
                      </h3>
                      <p className="text-sm text-text-1-light/70 dark:text-text-1/70 leading-relaxed">
                        We take the time to match you with engineers who truly click with your team.
                      </p>
                    </div>
                  </div>

                  {/* Works Your Hours */}
                  <div className="space-y-4 text-center sm:text-left flex flex-col items-center sm:items-start">
                    <div className="w-14 h-14 rounded-xl bg-primary-light dark:bg-primary flex items-center justify-center">
                      <Eye className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-text-1-light dark:text-text-1 mb-2">
                        Works Your Hours
                      </h3>
                      <p className="text-sm text-text-1-light/70 dark:text-text-1/70 leading-relaxed">
                        Timezone-flexible pros who'll overlap with your team seamlessly.
                      </p>
                    </div>
                  </div>

                  {/* Save Big */}
                  <div className="space-y-4 text-center sm:text-left flex flex-col items-center sm:items-start">
                    <div className="w-14 h-14 rounded-xl bg-primary-light dark:bg-primary flex items-center justify-center">
                      <Target className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-text-1-light dark:text-text-1 mb-2">
                        Save Big
                      </h3>
                      <p className="text-sm text-text-1-light/70 dark:text-text-1/70 leading-relaxed">
                        Same caliber talent at up to 70% less — more budget for what matters.
                      </p>
                    </div>
                  </div>

                  {/* Feels Like Family */}
                  <div className="space-y-4 text-center sm:text-left flex flex-col items-center sm:items-start">
                    <div className="w-14 h-14 rounded-xl bg-primary-light dark:bg-primary flex items-center justify-center">
                      <Eye className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-text-1-light dark:text-text-1 mb-2">
                        Feels Like Family
                      </h3>
                      <p className="text-sm text-text-1-light/70 dark:text-text-1/70 leading-relaxed">
                        Engineers who click with your culture and ship like they've always been there.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

            {/* Stats Section */}
          <AnimatedSection delay={0.05}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-16 text-center mt-16">
              {stats.map((stat, index) => (
                <div key={index}>
                  <p className="text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-light dark:text-primary mb-3">
                    <CountingNumber value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                  </p>
                  <p className="text-sm lg:text-base text-text-1-light/60 dark:text-text-1/60 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </SectionOpacity>
    </section>
  );
};

export default Index;
