import React from 'react'

const useGameList = () => {
  let items = [
    {
      "name": "Basketball",
      "img": "game1.svg",
      "badge": [
        "Popular"
      ],
      "url": "#basketball"
    },
    {
      "name": "Table Tennis",
      "img": "game2.svg",
      "badge": [],
      "url": "#table-tennis"
    },
    {
      "name": "Soccer",
      "img": "game3.jpeg",
      "badge": [
        "Popular"
      ],
      "url": "#soccer"
    },
    {
      "name": "Marathon",
      "img": "game4.png",
      "badge": [],
      "url": "#marathon"
    },
    {
      "name": "Sepak Takraw",
      "img": "game5.svg",
      "badge": [
        "New"
      ],
      "url": "#sepak-takraw"
    },
    {
      "name": "Billiards",
      "img": "game6.png",
      "badge": [],
      "url": "#billiards"
    },
    {
      "name": "Darts",
      "img": "game7.png",
      "badge": [
        "New",
        "Popular"
      ],
      "url": "#darts"
    }
  ];

  return items;
}

export default useGameList;