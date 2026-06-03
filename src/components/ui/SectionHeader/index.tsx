import { FC } from 'react';

interface Props {
  title: string;
  badge?: string;
  description?: string;
  classes?: string;
}

const generateBadge = (title: string): string => {
  const badgeMap: Record<string, string> = {
    'WHY PARTNER WITH US': 'Our Values',
    'CLIENT SUCCESS STORIES': 'Success Stories',
    'HEAR FROM OUR CLIENTS': 'Testimonials',
    'OUR JOURNEY': 'About Us',
    'WHO ARE OUR CLIENTS': 'Industries',
    'HOW IT WORKS': 'Process',
    'GET IN TOUCH': 'Contact',
    'FAQ': 'Questions',
  };
  
  return badgeMap[title] || title.split(' ')[0];
};

const SectionHeader: FC<Props> = ({ title, badge, description, classes = '' }) => {
  return (
    <div className={`text-center max-w-3xl mx-auto mb-12 ${classes}`}>
      <h2 className="text-[2.5vw] lg:text-[2vw] md:text-[6vw] font-bold text-text-1-light dark:text-text-1 mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-[1.1vw] lg:text-[1vw] md:text-[3.8vw] text-text-1-light/80 dark:text-text-1/80 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
