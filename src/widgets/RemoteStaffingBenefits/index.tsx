'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { Globe, Zap, DollarSign, TrendingUp, Shield, BarChart, Users, Target } from 'lucide-react';

import SectionTitle from '@/components/ui/SectionTitle';
import SectionOpacity from '@/components/ui/SectionOpacity';
import { REMOTE_STAFFING_ADVANTAGES } from '@/data';

interface Props {}

const iconMap: { [key: string]: any } = {
  Globe,
  Zap,
  DollarSign,
  TrendingUp,
  Shield,
  BarChart,
  Users,
  Target,
};

const RemoteStaffingBenefits: FC<Props> = () => {
  return (
    <section id="remote-benefits" className="border-t border-gray-1-light dark:border-gray-1 bg-gradient-to-b from-bg-1-light to-bg-2-light dark:from-bg-1 dark:to-bg-2 py-[6vw] md:py-[4vw]">
      <SectionOpacity>
        <div className="container mx-auto px-[12vw] md:px-[4vw] max-w-[1400px]">
          <SectionTitle title="ADVANTAGES OF REMOTE STAFFING PARTNERSHIPS." classes="pt-[3vw]" />
          <div className="pt-[3vw] pb-[5vw]">
          <div className="max-w-[85vw] md:max-w-full mx-auto">
            <p className="text-[1.1vw] lg:text-[1vw] md:text-[4vw] text-text-1-light/90 dark:text-text-1/90 leading-[1.5] mb-[5vw] md:mb-[8vw] text-center">
              Collaborating with a remote staffing partner unlocks tremendous potential for your organization. Discover how this approach can revolutionize your hiring strategy, team management, and business expansion:
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-1 gap-[2.5vw] md:gap-[5vw]">
              {REMOTE_STAFFING_ADVANTAGES.map((advantage, index) => {
                const IconComponent = iconMap[advantage.icon];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-bg-2-light dark:bg-bg-2 border border-gray-1-light dark:border-gray-1 rounded-[0.8vw] md:rounded-[2vw] p-[2.5vw] md:p-[5vw] hover:border-primary-light/50 dark:hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-[2vw] md:gap-[4vw]">
                      <div className="flex-shrink-0">
                        <div className="w-[4vw] h-[4vw] md:w-[10vw] md:h-[10vw] rounded-[0.5vw] md:rounded-[1vw] bg-primary-light/10 dark:bg-primary/10 flex items-center justify-center group-hover:bg-primary-light/20 dark:group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="w-[2.2vw] h-[2.2vw] md:w-[5.5vw] md:h-[5.5vw] text-primary-light dark:text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[1.4vw] lg:text-[1.2vw] md:text-[4.5vw] font-bold text-text-1-light dark:text-text-1 mb-[1vw] md:mb-[2vw]">
                          {advantage.title}
                        </h3>
                        <p className="text-[1vw] lg:text-[0.9vw] md:text-[3.2vw] text-text-1-light/70 dark:text-text-1/70 leading-[1.6]">
                          {advantage.description}
                        </p>
                      </div>
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

export default RemoteStaffingBenefits;
