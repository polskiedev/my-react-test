import React, { useEffect, useState } from 'react';
import SiteTileSkeleton from './SiteTileSkeleton';

const url = "https://my-json-server.typicode.com/polskiedev/json-db-game-tiles/tiles";

export interface Tile {
  label: string;
  tagline: string;
  icon: string;
  linktext: string;
  url: string;
}

const SiteTiles = (WrappedComponent: React.ComponentType<{ tiles: Tile[] }>) => {
  return () => {
    const [tiles, setTiles] = useState<Tile[]>([]);
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
      return <SiteTileSkeleton></SiteTileSkeleton>;
    }

    return <WrappedComponent tiles={tiles} />;
  };
};

export default SiteTiles;
