import React from 'react'

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

  return items;
}

export default useGameList;