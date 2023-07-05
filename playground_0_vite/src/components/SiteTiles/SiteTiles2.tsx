import React, { useEffect, useState } from 'react';
import { getSiteTileById } from '../../api/services/ApiService';
import { SiteTile } from "../../api/models/ApiResponse";

const SiteTiles2 = () => {
    const [tiles, setTiles] = useState<SiteTile | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSiteTileById(2);
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
            <div>
                <h3>{tiles.label}</h3>
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

export default SiteTiles2;
