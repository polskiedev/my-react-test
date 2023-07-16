import React, { useEffect, useState } from 'react';
import {getWindowSize} from '../../helpers/helpers';

const useCarouselClientWidth = (carouselRef: React.RefObject<HTMLDivElement>) => {
  const [currentScroll, setCurrentScroll] = useState(0);
  const [currentMaxScroll, setMaxScroll] = useState(0);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  const init = (data?: any) => {
    handleResize();
  };

  const handleResize = () => {
    console.log('handleResize');
    setWindowSize(getWindowSize());

    if (carouselRef.current) {
      const carouselWidth = carouselRef.current.clientWidth;
      const scrollWidth = carouselRef.current.scrollWidth;

      let maxScroll = Math.ceil(scrollWidth / carouselWidth);
      setMaxScroll(maxScroll);
      setCurrentScroll(0);
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      const carouselWidth = carouselRef.current.clientWidth;
      const scrollWidth = carouselRef.current.scrollWidth;
      let translateXValue = currentScroll * -carouselWidth;

      let maxScroll = Math.ceil(scrollWidth / carouselWidth);
      setMaxScroll(maxScroll);

      if (currentScroll < maxScroll && currentScroll >= 0) {
        if (currentScroll + 1 === maxScroll) {
          translateXValue = carouselWidth - scrollWidth;
        }

        carouselRef.current.style.transform = `translateX(${translateXValue}px)`;
      }
    }
  }, [currentScroll]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowSize]);

  const prevSlide = () => {
    if (currentScroll > 0) {
      setCurrentScroll(currentScroll - 1);
    }
  };

  const nextSlide = () => {
    if (currentMaxScroll > currentScroll + 1) {
      setCurrentScroll(currentScroll + 1);
    }
  };

  return {
    prevSlide,
    nextSlide,
    init,
    data: {
      max: currentMaxScroll,
      currIdx: currentScroll + 1,
      print: `${currentScroll + 1} of ${currentMaxScroll}`
    }
  };
};

export { useCarouselClientWidth };