// TestApiService.ts
import axios from 'axios';
import dataTopNavigationMenu from '../data/dataTopNavigationMenu';
import { APP_ENV, APP_API_KEY } from '../../config/config';

export interface Menu {
  label: string;
  url: string;
  icon?: string;
  hasDivider?: boolean;
  className?: string;
  linkClassName?: string;
  labelClassName?: string;
}

export async function getTopNavigationMenu(): Promise<Menu[]> {
  const API_BASE_URL = 'https://my-json-server.typicode.com/polskiedev/json-db-menu';

//   console.log(APP_ENV);
//   console.log(APP_API_KEY);
  if (APP_ENV === 'development') {
    return dataTopNavigationMenu().menus;
  }

  try {
    const response = await axios.get(`${API_BASE_URL}/menus`);
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

    // Return the fallback menu from dataTopNavigationMenu
    return dataTopNavigationMenu().menus;
  }
}
