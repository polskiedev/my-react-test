import React from 'react';
import useGameTiles, {Item} from './useGameTiles';

const ListGameTiles = ({ games }: { games: Item[] }) => {
  return (
    <div>
      {games.map((game) => (
        <div key={game.id} className="p-2 border border-solid border-gray-500">
          <h3>{game.name}</h3>
          <p>{game.tagline}</p>
          <p>{game.icon}</p>
          <p>{game.url}</p>
          <p>{game.linktext}</p>
        </div>
      ))}
    </div>
  );
};

export default useGameTiles(ListGameTiles);
