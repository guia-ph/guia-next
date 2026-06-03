'use client';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, Globe } from 'lucide-react';

import SectionHeader from '@/components/ui/SectionHeader';
import SectionOpacity from '@/components/ui/SectionOpacity';

const ContactUs = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone Number',
      value: '+1 (718) 747-8756',
      link: 'tel:+17187478756'
    },
    {
      icon: Mail,
      label: 'Email Address',
      value: 'info@guia.ph',
      link: 'mailto:info@guia.ph'
    },
    {
      icon: Clock,
      label: 'Office Hours',
      value: 'Monday to Friday, 9 AM - 6 PM PST',
      link: null
    },
    {
      icon: Globe,
      label: 'Location',
      value: "We're a fully remote company, but our support is global!",
      link: null
    }
  ];

  return (
    <section id="contact" className="border-t border-gray-1-light dark:border-gray-1 bg-gradient-to-b from-bg-1-light to-bg-1-light dark:from-bg-1 dark:to-bg-1 py-[6vw] md:py-[4vw] relative overflow-hidden">
      <SectionOpacity>
        <div className="container mx-auto px-[12vw] md:px-[4vw] max-w-[1400px] relative z-10">
          <SectionHeader title="GET IN TOUCH" />
          
          <div className="pb-[5vw]">
            <div className="max-w-[70vw] md:max-w-full mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-[4vw] md:mb-[6vw]"
              >
                <h3 className="text-[1.8vw] lg:text-[1.6vw] md:text-[5vw] font-bold text-text-1-light dark:text-text-1 mb-[1.5vw] md:mb-[3vw]">
                  Let's Connect! 👋
                </h3>
                <p className="text-[1.1vw] lg:text-[1vw] md:text-[3.5vw] text-text-1-light/80 dark:text-text-1/80 leading-[1.6] max-w-[60vw] md:max-w-full mx-auto">
                  We're passionate about building strong partnerships—whether you're seeking exceptional global talent, 
                  scaling your operations, or simply curious about our solutions, we're ready to help.
                </p>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-1 gap-[2vw] md:gap-[4vw]">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  const content = (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="border border-gray-1-light dark:border-gray-1 rounded-[0.8vw] md:rounded-[2vw] p-[2.5vw] md:p-[5vw] bg-bg-2-light/50 dark:bg-bg-2/50 hover:border-primary-light/50 dark:hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary-light/10 dark:hover:shadow-primary/10"
                    >
                      <div className="flex items-start gap-[1.5vw] md:gap-[3vw]">
                        <div className="flex-shrink-0 w-[3vw] h-[3vw] md:w-[8vw] md:h-[8vw] rounded-full bg-primary-light/10 dark:bg-primary/10 flex items-center justify-center">
                          <Icon className="w-[1.5vw] h-[1.5vw] md:w-[4vw] md:h-[4vw] text-primary-light dark:text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-[0.9vw] lg:text-[0.85vw] md:text-[3vw] font-semibold text-text-1-light/60 dark:text-text-1/60 mb-[0.5vw] md:mb-[1.5vw]">
                            {item.label}
                          </h4>
                          <p className="text-[1.1vw] lg:text-[1vw] md:text-[3.5vw] text-text-1-light dark:text-text-1 font-medium leading-[1.5]">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );

                  return item.link ? (
                    <a key={index} href={item.link} className="block">
                      {content}
                    </a>
                  ) : (
                    content
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

export default ContactUs;
