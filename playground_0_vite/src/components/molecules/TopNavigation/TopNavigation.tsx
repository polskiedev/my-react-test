import React, { useEffect, useState } from 'react';
import { getTopNavigationMenu } from '../../../api/services/TopNavigationApiService';
import {TopNavigationItem as Menu} from '../../../api/models/TopNavigationResponse';
import Link from '../ExtLink/ExtLink';
import ClassCollector from '../../../helpers/ClassManager/ClassCollector';

export const ClassBuilder = () => {
  const classList = new ClassCollector();
  const ulClassList = new ClassCollector();
  const liClassList = new ClassCollector();
  const linkClassList = new ClassCollector();

  classList.addClass('--ac-topnavigation');
  classList.addClass('h-14');
  classList.addClassGroup('flex-center');

  ulClassList.addClassGroup('flex-row');
  ulClassList.addClass('h-full');

  liClassList.addClass('h-full');
  liClassList.addClassGroup('flex-center');
  
  linkClassList.addClass('pl-3 pr-4');

  return {
    _: classList,
    ul: ulClassList,
    li: liClassList,
    a: linkClassList
  };
};

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
