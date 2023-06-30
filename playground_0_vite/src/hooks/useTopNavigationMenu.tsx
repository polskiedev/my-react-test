import React from 'react'

const useTopNavigationMenu = () => {
  return [
    {
      label: 'Home',
      className: '--icn-home',
      url: '/home'
    },
    {
      label: 'Slots',
      className: '--icn-slots',
      url: '/slots'
    },
    {
      label: 'Live Casino',
      className: '--icn-livecasino',
      url: '/livecasino'
    },
  ];
}

export default useTopNavigationMenu;