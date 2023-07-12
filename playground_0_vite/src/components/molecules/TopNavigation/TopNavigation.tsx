import React, { useEffect, useState } from 'react';
import { getTopNavigationMenu } from '../../../api/services/TopNavigationApiService';
import {TopNavigationItem as Menu} from '../../../api/models/TopNavigationResponse';
import Link from '../_Link/_Link';

const TopNavigation = () => {
  const [navigationMenu, setNavigationMenu] = useState<Menu[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNavigationMenu = async () => {
      try {
        const menuData = await getTopNavigationMenu();
        setNavigationMenu(menuData);
        setIsLoading(false);
      } catch (error) {
        // Handle error
        console.error('Error fetching top navigation menu:', error);
        setIsLoading(false);
      }
    };

    fetchNavigationMenu();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Navigation Menu</h1>
      <ul>
        {navigationMenu.map((menu) => (
          <li key={menu.label}>
            <Link url={menu.url} icon={menu.icon}>{menu.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopNavigation;
