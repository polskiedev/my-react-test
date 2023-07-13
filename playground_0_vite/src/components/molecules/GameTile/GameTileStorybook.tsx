import React from 'react'
import GameTile from './GameTile';
const GameTileStorybook = () => {
  let data = {
    name: 'Sample Game', 
    img: 'placeholder', 
    badge: ['New', 'Hot'], 
    url: '#gametile'
  };

  return (
    <GameTile item={data}></GameTile>
  )
}

export default GameTileStorybook;