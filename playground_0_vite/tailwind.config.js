/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,vue,js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      //--custom--
      'smini': '150px', //super small screen
      '2sm': '375px',
      //--long-name-reference--
      // 'mobile': '375px',
      // 'tablet': '640px', //sm
      // 'laptop': '1024px', //lg
      // 'desktop': '1280px', //xl
    },
    extend: {
      backgroundImage: {
        'btn-bg': 'none',
        'btn-hover-bg': 'none',
        'btn-active-bg': 'none',
        'btn-disabled': 'none',

        'btn-primary-bg': 'linear-gradient(180deg,#ffc933,#f7901d)',
        'btn-primary-hover-bg': 'linear-gradient(180deg,#ffe246,#ffc933 34.95%,#ffb22f)',
        'btn-primary-active-bg': 'linear-gradient(180deg,#f7901d,#ffc933)',
        
        'btn-secondary-bg': 'linear-gradient(180deg,#fa57cc,#f444b8 26.85%,#ed30a3 51.39%,#e51e8d 85.97%,#bb116d)',
        'btn-secondary-hover-bg': 'linear-gradient(180deg,#ff5fe7,#ff4bd4 26.85%,#ff32b9 51.39%,#ff1ea2 83.64%,#dd067f)',
        'btn-secondary-active-bg': 'linear-gradient(180deg,#c31473,#e51f8e 16.01%,#ef36aa 57.87%,#f154c2)',
        
        'btn-tertiary-bg': 'linear-gradient(180deg,rgba(0,161,229,.2),rgba(0,100,143,.2))',
        'btn-tertiary-hover-bg': 'linear-gradient(180deg,rgba(0,161,229,.2),rgba(0,100,143,.2))',
        'btn-tertiary-active-bg': 'linear-gradient(180deg,rgba(0,100,143,.2),rgba(0,161,229,.2))',

        'ac-topnavigation': 'none',
        'ac-headerbar':  'linear-gradient(to bottom,#009ce4 0%,#0094d5 100%)'
      },
      colors: {
        'btn': {
          'DEFAULT': 'transparent',
          
          'bg'          : '#efefef',
          'hover-bg'    : '#ccd1e4',
          'active-bg'   : '#f5f5f5',

          'text'        : '#000',
          'hover-text'  : '#000',
          'active-text' : '#000',

          'disabled-bg'   : '#6c757d',
          'disabled-text' : '#fff',
        },
        'btn-primary': {
          'DEFAULT'   : 'transparent',
          
          'bg'        :  'transparent',
          'hover-bg'  : 'transparent',
          'active-bg' : 'transparent',

          'text'        : '#fff',
          'hover-text'  : '#fff',
          'active-text' : '#fff'
        },
        'btn-secondary': {
          'DEFAULT': 'transparent',

          'bg'        :  'transparent',
          'hover-bg'  : 'transparent',
          'active-bg' : 'transparent',

          'text'        : '#fff',
          'hover-text'  : '#fff',
          'active-text' : '#fff'
        },
        'btn-tertiary': {
          'DEFAULT': '#00648f',

          'bg'        :  '#00648f',
          'hover-bg'  : '#004766',
          'active-bg' : '#00374f',

          'text'        : '#fff',
          'hover-text'  : '#fff',
          'active-text' : '#fff'
        },
        ac: {
          'DEFAULT': 'transparent',

          'topnavigation' : '#00648f',
          'headerbar'     : 'transparent'
        },
        header: {
          'DEFAULT': '#ffea00'
        }
      },
    },
  },
  plugins: [],
}

