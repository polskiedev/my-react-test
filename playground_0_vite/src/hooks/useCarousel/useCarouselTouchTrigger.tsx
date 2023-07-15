import React, { useEffect, useState, useRef } from 'react';

const useCarouselTouchTrigger = (carouselRef: React.RefObject<HTMLDivElement>) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const [items, setItems] = useState<any>([]);

    const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;

      setCurrentIndex(newIndex);
      // console.log('prev slide: '+ newIndex);
      // console.log(items);
    };

    const nextSlide = () => {
      const isLastSlide = currentIndex === items.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;

      setCurrentIndex(newIndex);
      // console.log('next slide: ' + newIndex);
      // console.log(items);
    };

  return {
    prevSlide,
    nextSlide,
    setItems,
    data: {
      currIdx: currentIndex,
      print: `${currentIndex}`
    }
  };
};

export { useCarouselTouchTrigger };