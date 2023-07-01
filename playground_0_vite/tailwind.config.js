/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,vue,js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      'mobile': '375px',
      'tablet': '640px', //sm
      'laptop': '1024px', //lg
      'desktop': '1280px', //xl
    },
    extend: {
      colors: {
        primary: {
          100: 'linear-gradient(180deg,#ffc933,#f7901d)',
          200: 'linear-gradient(180deg,#ffe246,#ffc933 34.95%,#ffb22f)'
        },
        secondary: {
          100: 'linear-gradient(180deg,#fa57cc,#f444b8 26.85%,#ed30a3 51.39%,#e51e8d 85.97%,#bb116d)',
          200: 'linear-gradient(180deg,#ff5fe7,#ff4bd4 26.85%,#ff32b9 51.39%,#ff1ea2 83.64%,#dd067f)'
        },
        tertiary: {
          100: '#00648f',
          200: '#00648f'
        }

      }
    }
  },
  plugins: [],
}

