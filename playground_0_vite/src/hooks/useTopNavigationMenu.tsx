import React from 'react'

const useTopNavigationMenu = () => {
  return [
    {
      label: 'Home',
      className: '--icn-home',
      url: '#'
    },
    {
      label: 'About',
      className: '--icn-about',
      url: '#'
    },
    {
      label: 'Contact Us',
      className: '--icn-contactus',
      url: '#'
    },
  ];
}

export default useTopNavigationMenu;