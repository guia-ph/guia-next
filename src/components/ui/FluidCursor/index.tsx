'use client'

import { FC } from 'react';


interface Props { }

const Index: FC<Props> = () => {

  
  return (
    <div className='fixed inset-0 pointer-events-none' style={{ zIndex: 9999 }}>
      <canvas 
        id="fluid" 
        style={{ 
          width: '100vw', 
          height: '100vh',
          display: 'block'
        }} 
      />
    </div>
  );
};
export default Index;
