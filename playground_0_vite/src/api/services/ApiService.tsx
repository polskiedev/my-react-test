// apiService.ts
import axios from 'axios';
import { GameTile } from "../models/ApiResponse";

const BASE_URL = 'https://my-json-server.typicode.com/polskiedev/json-db-game-tiles/';

export async function getGameTiles(): Promise<GameTile[]> {
  try {
    const response = await axios.get(`${BASE_URL}/tiles`);
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error fetching users:', error);
    throw error;
  }
}

export async function getGameTileById(id: number): Promise<GameTile> {
    try {
      const response = await axios.get(`${BASE_URL}/tiles/${id}`);
      return response.data;
    } catch (error) {
      // Handle error
      console.error(`Error fetching game tile with ID ${id}:`, error);
      throw error;
    }
}
