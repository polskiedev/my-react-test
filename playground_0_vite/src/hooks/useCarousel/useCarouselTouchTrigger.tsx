import React, { useEffect, useState, useRef } from 'react';

const useCarouselTouchTrigger = (carouselRef: React.RefObject<HTMLDivElement>) => {
  const [initialX, setInitialX] = useState(0);

  const [items, setItems] = useState<any>([]);

  const init = (data?: any) => {

    carouselRef.current?.addEventListener('touchstart', handleTouchStart as any, false);
    carouselRef.current?.addEventListener('touchmove', handleTouchMove as any, false);
    carouselRef.current?.addEventListener('touchend', handleTouchEnd as any, false);
  
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setInitialX(event.touches[0].clientX);
    console.log('Start');
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    const deltaX = event.touches[0].clientX - initialX;
    const currX = carouselRef.current?.style.transform;
    const regex = /^translateX\((-?\d+px)\)$/;
  
    if (carouselRef.current) {
      const value1 = currX ? currX.replace(regex, '$1'): 0;
      carouselRef.current.style.transform = `translateX(${parseInt(deltaX)}px)`;
      console.log(deltaX, value1);
    }
    console.log('Move');
  };
  

  const handleTouchEnd = () => {
    console.log('End');
  };

  return {
    init,
    data: {
    }
  };
};

export { useCarouselTouchTrigger };