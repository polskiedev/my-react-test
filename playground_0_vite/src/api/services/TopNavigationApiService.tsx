// TestApiService.ts
import axios from 'axios';
import APP_API from './ApiServiceDirectory';
import { APP_ENV, APP_API_KEY } from '../../config/config';
import {TopNavigationItem as Menu} from '../models/TopNavigationResponse';
import dataTopNavigation from '../data/dataTopNavigation';

export async function getTopNavigationMenu(): Promise<Menu[]> {
  const {url: BASE_URL, base: BASE_DIR} = APP_API.top_navigation;

  if (APP_ENV === 'development') {
    return dataTopNavigation().menus;
  }

  try {
    const response = await axios.get(`${BASE_URL}/${BASE_DIR}`);
    const data = response.data;

    // Transform the data as needed for the top navigation menu
    const topNavigationMenu: Menu[] = data.map((menu: Menu) => ({
      label: menu.label,
      icon: menu.icon,
      url: menu.url,
    }));

    return topNavigationMenu;
  } catch (error) {
    // Handle API error, fallback to dataTopNavigationMenu
    console.error('Error fetching top navigation menu:', error);
    throw error;
  }
}
