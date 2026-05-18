'use client';

import { FC } from 'react';

import SectionTitle from '@/components/ui/SectionTitle';
import SectionOpacity from '@/components/ui/SectionOpacity';
import { Globe, Award, Clock, Heart } from "lucide-react";
import { AnimatedSection, SectionHeading } from '@/components/AnimatedSection';




 
interface Props {
  
}

const values = [
  { icon: Award, title: "The Right Fit", desc: "We take the time to match you with engineers who truly click with your team." },
  { icon: Globe, title: "Works Your Hours", desc: "Timezone-flexible pros who'll overlap with your team seamlessly." },
  { icon: Clock, title: "Save Big", desc: "Same caliber talent at up to 70% less — more budget for what matters." },
  { icon: Heart, title: "Feels Like Family", desc: "Engineers who click with your culture and ship like they've always been there." },
];

const Index: FC<Props> = () => {
  return (
    <section id="about" className="border-t border-gray-1-light dark:border-gray-1 bg-gradient-to-b from-bg-1-light to-bg-1-light dark:from-bg-1 dark:to-bg-1 py-[6vw] md:py-[4vw] z-0">
      <SectionOpacity classes='z-2'>
        <div className="container mx-auto px-[12vw] md:px-[4vw] max-w-[1400px]">
          {/* <SectionTitle title="ABOUT." classes="pt-[3vw] z-10" /> */}
          <AnimatedSection>
        <SectionHeading
          badge="Who We Are"
          title="We're Obsessed with Finding You the Right People"
          description="Your remote team shouldn’t feel outsourced. Guia connects you with reliable VA engineers and remote professionals in the Philippines who work like an extension of your business."
        />
      </AnimatedSection>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((v, i) => (
          <AnimatedSection key={v.title} delay={i * 0.1}>
            <div className="bg-card rounded-xl p-6 border border-border card-hover text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                <v.icon size={24} />
              </div>
              <h3 className="font-display font-bold text-lg text-secondary mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
        </div>
      </SectionOpacity>
    </section>
  );
};
export default Index;
