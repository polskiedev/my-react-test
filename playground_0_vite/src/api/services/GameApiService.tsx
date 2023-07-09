// apiService.ts
import axios from 'axios';
import API_DIR from './ApiServiceDirectory';
import { GameTile } from "../models/GameApiResponse";

const {url: BASE_URL, base: BASE_DIR} = API_DIR.game_list;

export async function getGameTiles(): Promise<GameTile[]> {
  try {
    const response = await axios.get(`${BASE_URL}/${BASE_DIR}`);
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error fetching users:', error);
    throw error;
  }
}

export async function getGameTileById(id: number): Promise<GameTile> {
    try {
      const response = await axios.get(`${BASE_URL}/${BASE_DIR}/${id}`);
      return response.data;
    } catch (error) {
      // Handle error
      console.error(`Error fetching site tile with ID ${id}:`, error);
      throw error;
    }
}
