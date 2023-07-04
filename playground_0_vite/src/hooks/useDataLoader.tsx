import React from 'react'
import useGameList from "./useGameList";
import useTopNavigationMenu from "./useTopNavigationMenu";

function shuffleArray<T>(array: T[]): T[] {
    const newArray = [...array];
    const length = newArray.length;
  
    for (let currentIndex = length - 1; currentIndex > 0; currentIndex--) {
      const randomIndex = Math.floor(Math.random() * (currentIndex + 1));
  
      // Swap current element with a random element
      const temporaryValue = newArray[currentIndex];
      newArray[currentIndex] = newArray[randomIndex];
      newArray[randomIndex] = temporaryValue;
    }
  
    return newArray;
}

const useDataLoader = () => {
  return ([

  ]);
}

export function dataGame() {
    
    return shuffleArray(useGameList());
}


export function dataMenu() {
    return useTopNavigationMenu();
}

export default useDataLoader