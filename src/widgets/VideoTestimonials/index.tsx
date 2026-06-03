'use client';

import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

import SectionHeader from '@/components/ui/SectionHeader';
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
          <SectionHeader 
            title="HEAR FROM OUR CLIENTS" 
            description="Don't just take our word for it. Watch real stories from business owners who've transformed their operations with our remote professionals."
          />
          
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
                  <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                    {/* Video Placement */}
                    <div className="w-full md:w-1/2 relative group">
                      {/* Gradient Ring */}
                      <div className="absolute -inset-4 bg-gradient-to-r from-primary-light via-purple-500 to-rose-500 dark:from-primary dark:via-purple-500 dark:to-rose-500 rounded-[3rem] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                      
                      <div className="relative aspect-video bg-bg-1-light dark:bg-bg-1 rounded-[2.5rem] overflow-hidden border border-gray-1-light/10 dark:border-white/10 shadow-2xl cursor-pointer">
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
                              className="h-full w-full object-cover opacity-60 group-hover:opacity-40 transition-all duration-700 transform group-hover:scale-110"
                            />
                            
                            {/* Play Button Overlay */}
                            <div 
                              className="absolute inset-0 flex items-center justify-center"
                              onClick={() => handlePlayVideo(index)}
                            >
                              <div className="h-20 w-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-white shadow-2xl group-hover:bg-primary-light dark:group-hover:bg-primary transition-all group-hover:scale-125 group-hover:shadow-[0_0_50px_rgba(99,102,241,0.5)]">
                                <Play className="h-8 w-8 ml-1" fill="currentColor" />
                              </div>
                            </div>

                            {/* Identity Label */}
                            <div className="absolute bottom-6 left-6 px-4 py-2 bg-bg-1-light/80 dark:bg-bg-1/80 backdrop-blur-md rounded-xl border border-gray-1-light/10 dark:border-white/10 flex items-center gap-3">
                              <div className="h-8 w-8 rounded-full overflow-hidden border border-gray-1-light/20 dark:border-white/20">
                                <img 
                                  src={testimonial.thumbnail} 
                                  className="h-full w-full object-cover"
                                  alt={testimonial.author}
                                />
                              </div>
                              <span className="text-[10px] font-bold text-text-1-light dark:text-white uppercase tracking-widest italic">
                                {testimonial.author} @ {testimonial.company}
                              </span>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Text Side */}
                    <div className="w-full md:w-1/2 space-y-8">
                      <div className="space-y-4">
                        <span className="text-[11px] font-black text-primary-light dark:text-primary uppercase tracking-widest italic border-l-2 border-primary-light dark:border-primary pl-4">
                          Client Verified
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-black text-text-1-light dark:text-white tracking-tighter leading-none">
                          Real Results.<br/>Real Impact.
                        </h2>
                      </div>

                      <p className="text-lg text-text-1-light/70 dark:text-slate-400 font-medium leading-relaxed pr-0 md:pr-12">
                        "{testimonial.quote}"
                      </p>
                      
                      <div className="flex items-center gap-6 flex-wrap">
                        <div className="flex flex-col">
                          <h4 className="text-xl font-bold text-text-1-light dark:text-white tracking-tight">
                            {testimonial.author}
                          </h4>
                          <span className="text-[10px] font-black text-text-1-light/50 dark:text-slate-500 uppercase tracking-[0.3em]">
                            {testimonial.position}
                          </span>
                        </div>
                        <div className="h-8 w-px bg-gray-1-light dark:bg-slate-800"></div>
                        <div className="flex items-center gap-2 opacity-60">
                          <div className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse"></div>
                          <span className="text-[9px] font-black text-text-1-light/60 dark:text-slate-400 uppercase tracking-widest italic leading-tight">
                            Verified Client
                          </span>
                        </div>
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
