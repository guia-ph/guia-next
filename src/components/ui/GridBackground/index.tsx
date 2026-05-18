import React from 'react';
import { cn } from '@/shared/utils';

interface GridBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

export const GridBackground: React.FC<GridBackgroundProps> = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        'fixed inset-0 w-full h-full pointer-events-none z-0',
        className
      )}
    >
      <div className="absolute inset-0 w-full h-full bg-grid-light dark:bg-grid-dark [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]" />
      {children}
    </div>
  );
};

export const GridSmallBackground: React.FC<GridBackgroundProps> = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        'fixed inset-0 w-full h-full bg-bg-1-light dark:bg-bg-1',
        className
      )}
    >
      <div className="absolute inset-0 w-full h-full bg-grid-small-light dark:bg-grid-small-dark [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]" />
      {children}
    </div>
  );
};

export const DotBackground: React.FC<GridBackgroundProps> = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        'fixed inset-0 w-full h-full bg-bg-1-light dark:bg-bg-1',
        className
      )}
    >
      <div className="absolute inset-0 w-full h-full bg-dot-light dark:bg-dot-dark [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]" />
      {children}
    </div>
  );
};

export default GridBackground;
