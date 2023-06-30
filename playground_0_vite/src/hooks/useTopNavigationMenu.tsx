import React from 'react'

const useTopNavigationMenu = () => {
  return [
    {
      label: 'Home',
      className: '--icn-home',
      url: '/home'
    },
    {
      label: 'About',
      className: '--icn-about',
      url: '/about'
    },
    {
      label: 'Contact Us',
      className: '--icn-contactus',
      url: '/contactus'
    },
  ];
}

export default useTopNavigationMenu;