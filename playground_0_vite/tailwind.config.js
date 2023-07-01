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
      // gradientColorStops: {
      //   'custom-gradient': ['rgb(255, 0, 0)', 'rgb(0, 255, 0)', 'rgb(0, 0, 255)'],
      // },
      // colors: {
      //   primary: {
      //     100: '#fff',
      //     200: '#fff'
      //   },
      //   secondary: {
      //     100: '#fff',
      //     200: '#fff'
      //   },
      //   tertiary: {
      //     100: '#00648f',
      //     200: '#00648f'
      //   }
      // }
    }
  },
  plugins: [],
}

