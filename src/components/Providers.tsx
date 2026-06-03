'use client';

import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { ThemeProvider } from '@/contexts/ThemeContext';

export function Providers({ children }: { children: React.ReactNode }) {
  const [dimension, setDimension] = useState<any>(null);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener('resize', resize);
      lenis.destroy();
    };
  }, []);

  return <ThemeProvider>{children}</ThemeProvider>;
}
