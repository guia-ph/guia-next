import { FC } from 'react';

import SectionTitle from '@/components/ui/SectionTitle';
import ServiceCard from '@/components/ServiceCard';

import { CARDS } from '@/data';

interface Props {}

const Index: FC<Props> = () => {
  return (
    <section id="services" className="relative border-t border-gray-1-light dark:border-gray-1 bg-bg-1-light dark:bg-bg-1 py-[6vw] md:py-[4vw]">
      <div className="container mx-auto px-[12vw] md:px-[4vw] max-w-[1400px]">
        <SectionTitle title="SERVICES." />
          {CARDS.map((card) => (
            <ServiceCard key={card.title} card={card} />
          ))}
        </div>
    </section>
  );
};
export default Index;
