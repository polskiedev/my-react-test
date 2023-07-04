import React, { useEffect, useState } from 'react';

const url = "https://my-json-server.typicode.com/polskiedev/json-db-game-tiles/tiles";

export interface Item {
  id: number;
  name: string;
  tagline: string;
  icon: string;
  linktext: string;
  url: string;
}

const GameTiles = (WrappedComponent: React.ComponentType<{ games: Item[] }>) => {
  return () => {
    const [tiles, setTiles] = useState<Item[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setTiles(data);
          setIsLoading(false);
        });
    }, []);

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return <WrappedComponent games={tiles} />;
  };
};

export default GameTiles;
