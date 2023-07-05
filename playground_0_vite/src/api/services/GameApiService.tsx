// apiService.ts
import axios from 'axios';
import { GameTile } from "../models/GameApiResponse";

const BASE_URL = 'https://my-json-server.typicode.com/polskiedev/json-db-games2/';

export async function getGameTiles(): Promise<GameTile[]> {
  try {
    const response = await axios.get(`${BASE_URL}/games`);
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error fetching users:', error);
    throw error;
  }
}

export async function getGameTileById(id: number): Promise<GameTile> {
    try {
      const response = await axios.get(`${BASE_URL}/games/${id}`);
      return response.data;
    } catch (error) {
      // Handle error
      console.error(`Error fetching site tile with ID ${id}:`, error);
      throw error;
    }
}
