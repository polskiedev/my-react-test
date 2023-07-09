//dataTopNavigationMenu
import React from 'react'

const dataTopNavigationMenu = () => {
  return {
    "menus": [
      {
        "id": 1,
        "label": "Home",
        "icon": "home",
        "url": "#home"
      },
      {
        "id": 2,
        "label": "About",
        "icon": "slots",
        "url": "#about"
      },
      {
        "id": 3,
        "label": "Contact Us",
        "icon": "cards",
        "url": "#contactus",
        "className": "liClassName hidden md:block",
        "linkClassName": "linkClassName",
        "labelClassName": "labelClassName"
      },
      {
        "id": 4,
        "label": "Shop",
        "icon": "shop",
        "url": "#shop",
        "hasDivider": true
      }
    ]
  };
}

export default dataTopNavigationMenu;