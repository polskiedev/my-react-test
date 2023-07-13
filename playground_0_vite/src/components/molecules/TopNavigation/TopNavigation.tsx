import React, { useEffect, useState } from 'react';
import { getTopNavigationMenu } from '../../../api/services/TopNavigationApiService';
import {TopNavigationItem as Menu} from '../../../api/models/TopNavigationResponse';
import { default as ClassBuilder } from './TopNavigationClassBuilder';
import Link from '../ExtLink/ExtLink';

const TopNavigation = () => {
  const [navigationMenu, setNavigationMenu] = useState<Menu[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const {_: mainCB, ul: ulCB, li: liCB, a: linkCB} = ClassBuilder();

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
    <nav className={mainCB.build()}>
      <ul className={ulCB.build()}>
        {navigationMenu.map((menu) => {
          menu.className && liCB.addClass(menu.className);
          menu.linkClassName && linkCB.addClass(menu.linkClassName);
          menu.hasDivider && liCB.addClass('add-divider');

          return (
            <li className={liCB.build()} key={menu.label}>
              <Link className={linkCB.build()} url={menu.url} icon={menu.icon}>
                {menu.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  );
};

export default TopNavigation;
