'use client'

import { FC, useEffect } from 'react';

import initCursor from '@/shared/utils/useShadowCursor'

interface Props { }

const Index: FC<Props> = () => {

  useEffect(() => {
    // Small delay to ensure canvas is mounted in DOM
    const timer = setTimeout(() => {
      initCursor();
    }, 100);
    
    return () => clearTimeout(timer);
  }, [])
  
  return (
    <div className='fixed left-0 top-0 h-screen w-screen pointer-events-none' style={{ zIndex: -1 }}>
      <canvas id="fluid" className='h-screen w-screen' />
    </div>
  );
};
export default Index;
