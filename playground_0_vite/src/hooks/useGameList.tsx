import React from 'react'

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

const useGameList = () => {
  let items = [
    {   
        name: 'Basketball',
        img:'game1.svg',
        badge: ['Popular']
    }, 
    {
        name: 'Table Tennis',
        img:'game2.svg',
        badge: []
    }, 
    {
        name: 'Soccer',
        img:'game3.jpeg',
        badge: ['Popular']
    }, 
    {
        name: 'Marathon',
        img:'game4.png',
        badge: ''
    }, 
    {
        name: 'Sepak Takraw',
        img:'game5.svg',
        badge: ['New']
    }, 
    {
        name: 'Billiards',
        img:'game6.png',
        badge: ''
    }, 
    {
        name: 'Darts',
        img:'game7.png',
        badge: ['New', 'Popular']
    } 
  ];

  return shuffleArray(items);
}

export default useGameList;