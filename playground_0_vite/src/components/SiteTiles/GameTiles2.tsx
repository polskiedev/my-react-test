import React, { useEffect, useState } from 'react';
import { getGameTileById } from '../../api/services/ApiService';
import { GameTile } from "../../api/models/ApiResponse";

const GameTiles2 = () => {
    const [tiles, setTiles] = useState<GameTile | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getGameTileById(2);
        setTiles(data);
      } catch (error) {
        // Handle error
        console.error('Error fetching game tiles:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
        {tiles ? (
            <div key={tiles.id}>
                <h3>{tiles.name}</h3>
                <p>{tiles.tagline}</p>
                <p>{tiles.icon}</p>
                <p>{tiles.url}</p>
            </div>
        ) : (
            <p>Loading...</p>
        )}
    </div>
);
};

export default GameTiles2;
