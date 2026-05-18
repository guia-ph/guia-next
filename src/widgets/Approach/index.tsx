import { FC } from 'react';

import SectionTitle from '@/components/ui/SectionTitle';
import SectionOpacity from '@/components/ui/SectionOpacity';
import Timeline from '@/components/ui/Timeline';

import { APPROACH_CARDS } from '@/data';

interface Props {}

const Index: FC<Props> = () => {
  return (
    <section id="approach" className="border-t border-gray-1-light dark:border-gray-1 bg-bg-1-light dark:bg-bg-1 py-[6vw] pb-[12vw]">
      <SectionOpacity>
        <div className="container mx-auto px-[12vw] md:px-[4vw] max-w-[1400px]">
          <SectionTitle title="HOW IT WORKS." classes="pt-[2.5vw] top-0 z-20" />
          <div className="pt-[6vw] md:pt-[8vw]">
          <Timeline items={APPROACH_CARDS} />
        </div>
        </div>
      </SectionOpacity>
    </section>
  );
};
export default Index;
