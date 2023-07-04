import React from 'react'
////https://my-json-server.typicode.com/polskiedev/json-db-menu

const useTopNavigationMenu = () => {
  return [
    {
      "label": "Home",
      "icon": "home",
      "url": "#home"
    },
    {
      "label": "About",
      "icon": "slots",
      "url": "#about"
    },
    {
      "label": "Contact Us",
      "icon": "cards",
      "url": "#contactus",
      "className": "liClassName hidden md:block",
      "linkClassName": "linkClassName",
      "labelClassName": "labelClassName"
    },
    {
      "label": "Shop",
      "icon": "shop",
      "url": "#shop",
      "hasDivider": true
    }
  ];
}

export default useTopNavigationMenu;