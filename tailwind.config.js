/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**",
    "*",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily:{
        unna:['Unna'],
        cursive:['Dynalight'],
      },
      animation:{
        "loop-scroll":"loop-scroll 20s linear infinite",
      },
      keyframes:{
        "loop-scroll":{
          from:{transform:"translateX(0)"},
          to:{transform:"translateX(-100%)"},
        }
      },

    },
    screens: {
      'xm':'320px',
      // => @media (min-width: 320px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [
    require('flowbite/plugin')
]
}

