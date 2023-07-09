// apiService.ts
import axios from 'axios';
import API_DIR from './ApiServiceDirectory';
import { SiteTile } from "../models/ApiResponse";

const {url: BASE_URL, base: BASE_DIR} = API_DIR.site_tiles;

export async function getSiteTiles(): Promise<SiteTile[]> {
  try {
    const response = await axios.get(`${BASE_URL}/${BASE_DIR}`);
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error fetching users:', error);
    throw error;
  }
}

export async function getSiteTileById(id: number): Promise<SiteTile> {
    try {
      const response = await axios.get(`${BASE_URL}/${BASE_DIR}/${id}`);
      return response.data;
    } catch (error) {
      // Handle error
      console.error(`Error fetching site tile with ID ${id}:`, error);
      throw error;
    }
}
