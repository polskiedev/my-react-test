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
        'primary': 'linear-gradient(180deg,#ffc933,#f7901d)',
        'secondary': 'linear-gradient(180deg,#fa57cc,#f444b8 26.85%,#ed30a3 51.39%,#e51e8d 85.97%,#bb116d)',
        'tertiary': 'linear-gradient(180deg,rgba(0,161,229,.2),rgba(0,100,143,.2))',

        'primary-hover': 'linear-gradient(180deg,#ffe246,#ffc933 34.95%,#ffb22f)',
        'secondary-hover': 'linear-gradient(180deg,#ff5fe7,#ff4bd4 26.85%,#ff32b9 51.39%,#ff1ea2 83.64%,#dd067f)',
        'tertiary-hover': 'linear-gradient(180deg,rgba(0,161,229,.2),rgba(0,100,143,.2))',

        'primary-active': 'linear-gradient(180deg,#f7901d,#ffc933)',
        'secondary-active': 'linear-gradient(180deg,#c31473,#e51f8e 16.01%,#ef36aa 57.87%,#f154c2)',
        'tertiary-active': 'linear-gradient(180deg,rgba(0,100,143,.2),rgba(0,161,229,.2))',

        'ac-disabled': 'none',
        'ac-headerbar':  'linear-gradient(to bottom,#009ce4 0%,#0094d5 100%)'

      },
      colors: {
        primary: {
          'DEFAULT': 'transparent',
          'hover': 'transparent',
          'active': 'transparent',
          'tc': '#fff',
          'hover-tc': '#fff',
          'active-tc': '#fff'
        },
        secondary: {
          'DEFAULT': 'transparent',
          'hover': 'transparent',
          'active': 'transparent',
          'tc': '#fff',
          'hover-tc': '#fff',
          'active-tc': '#fff'
        },
        tertiary: {
          'DEFAULT': '#00648f',
          'hover': '#004766',
          'active': '#00374f',
          'tc': '#fff',
          'hover-tc': '#fff',
          'active-tc': '#fff'
        },
        ac: {
          'DEFAULT': 'transparent',
          'disabled': '#6c757d',
          
          'topnavigation': '#00648f',
          'headerbar': 'transparent'
        }
      },
    },
  },
  plugins: [],
}

