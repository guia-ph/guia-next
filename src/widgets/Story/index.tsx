'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Users } from 'lucide-react';

import SectionOpacity from '@/components/ui/SectionOpacity';

interface Props {}

const features = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To bridge businesses with exceptional remote talent, creating partnerships that drive growth and innovation across borders.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'To be the leading provider of remote staffing solutions, transforming how businesses access and leverage global talent.',
  },
  {
    icon: Users,
    title: 'Our Values',
    description: 'Excellence, integrity, and partnership guide everything we do. We believe in building lasting relationships based on trust and results.',
  },
];

const Story: FC<Props> = () => {
  return (
    <section id="story" className="border-t border-gray-1-light dark:border-gray-1 bg-gradient-to-b from-bg-1-light to-bg-2-light dark:from-bg-1 dark:to-bg-2 py-[6vw] md:py-[8vw]">
      <SectionOpacity>
        <div className="container mx-auto px-[12vw] md:px-[4vw] max-w-[1400px]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            {/* Left side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <span className="inline-block px-4 py-2 bg-primary-light/10 dark:bg-primary/10 text-primary-light dark:text-primary text-sm font-semibold rounded-full mb-6">
                  Our Journey
                </span>
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-text-1-light dark:text-text-1 leading-tight mb-6">
                  People-Centered, Performance-Driven
                </h2>
                <p className="text-base text-text-1-light/70 dark:text-text-1/70 leading-relaxed mb-8">
                  We're more than a remote staffing solution—we're a catalyst for change. Built on the principle that exceptional talent transcends geographical boundaries, we bridge businesses and visionary leaders with skilled professionals across the globe.
                </p>
                <a href="#contact" className="inline-block px-6 py-3 bg-primary-light dark:bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Get Started
                </a>
              </div>
            </motion.div>

            {/* Right side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-bg-2-light dark:bg-bg-2">
                <img 
                  src="/images/group-photo-1.jpg" 
                  alt="Our Team" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Feature Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-light/10 dark:bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-light dark:text-primary" />
                </div>
                <h3 className="text-lg font-bold text-text-1-light dark:text-text-1 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-text-1-light/70 dark:text-text-1/70 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionOpacity>
    </section>
  );
};

export default Story;
