'use client';

import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Star } from 'lucide-react';

import SectionTitle from '@/components/ui/SectionTitle';
import SectionOpacity from '@/components/ui/SectionOpacity';
import Carousel from '@/components/ui/Carousel';
import videoTestimonialsData from '@/data/videoTestimonials.json';

interface VideoTestimonial {
  videoUrl: string;
  thumbnail: string;
  author: string;
  position: string;
  company: string;
  quote: string;
  rating: number;
}

interface Props {}

const VideoTestimonials: FC<Props> = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const TESTIMONIALS: VideoTestimonial[] = videoTestimonialsData;

  const handlePlayVideo = (index: number) => {
    setPlayingVideo(index);
  };

  return (
    <section id="video-testimonials" className="border-t border-gray-1-light dark:border-gray-1 bg-bg-2-light dark:bg-bg-2 py-[6vw] md:py-[8vw]">
      <SectionOpacity>
        <div className="container mx-auto px-[12vw] md:px-[4vw] max-w-[1400px]">
          <SectionTitle title="HEAR FROM OUR CLIENTS." classes="pt-[3vw]" />
          
          <div className="pt-[4vw] md:pt-[6vw]">
            <Carousel
              autoPlay={false}
              showControls={true}
              showIndicators={true}
              className="w-full"
            >
              {TESTIMONIALS.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-[4vw] md:gap-[6vw] items-center">
                    <div className="relative aspect-video rounded-[1vw] md:rounded-[2vw] overflow-hidden bg-bg-1-light dark:bg-bg-1 border border-gray-1-light dark:border-gray-1">
                      {playingVideo === index ? (
                        <iframe
                          src={testimonial.videoUrl}
                          title={`${testimonial.author} testimonial`}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <>
                          <img
                            src={testimonial.thumbnail}
                            alt={testimonial.author}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center group hover:bg-black/40 transition-colors cursor-pointer"
                            onClick={() => handlePlayVideo(index)}
                          >
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              className="w-[6vw] h-[6vw] md:w-[15vw] md:h-[15vw] rounded-full bg-primary-light/90 dark:bg-primary/90 flex items-center justify-center backdrop-blur-sm"
                            >
                              <Play className="w-[3vw] h-[3vw] md:w-[8vw] md:h-[8vw] text-white ml-[0.3vw] md:ml-[1vw]" fill="currentColor" />
                            </motion.div>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="space-y-[2vw] md:space-y-[4vw]">
                      <div className="flex gap-[0.5vw] md:gap-[1vw]">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-[1.5vw] h-[1.5vw] md:w-[4vw] md:h-[4vw] text-yellow-500 fill-yellow-500"
                          />
                        ))}
                      </div>

                      <blockquote className="text-[1.5vw] lg:text-[1.3vw] md:text-[4vw] text-text-1-light dark:text-text-1 leading-[1.6] italic">
                        "{testimonial.quote}"
                      </blockquote>

                      <div className="pt-[2vw] md:pt-[4vw] border-t border-gray-1-light/30 dark:border-gray-1/30">
                        <p className="text-[1.3vw] lg:text-[1.1vw] md:text-[4vw] font-semibold text-text-1-light dark:text-text-1 mb-[0.5vw] md:mb-[1vw]">
                          {testimonial.author}
                        </p>
                        <p className="text-[1vw] lg:text-[0.9vw] md:text-[3vw] text-text-1-light/70 dark:text-text-1/70">
                          {testimonial.position}
                        </p>
                        <p className="text-[0.9vw] lg:text-[0.8vw] md:text-[2.8vw] text-primary-light dark:text-primary font-medium mt-[0.5vw] md:mt-[1vw]">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </Carousel>
          </div>
        </div>
      </SectionOpacity>
    </section>
  );
};

export default VideoTestimonials;
