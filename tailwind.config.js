const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    content: [
        "./src/**/*.{html,js,scss}",
        "./node_modules/tw-elements/dist/js/**/*.js"
    ],
    theme: {
      fontFamily: {
        'MyriadPro': ['Myriad Pro Regular', 'sans-serif'],
        'MyriadProBold': ['Myriad Pro Bold', 'sans-serif'], 
        'MyriadProSemiBold': ['Myriad Pro SemiBold', 'sans-serif'], 
      },
      screens:{
        // 'xxl': {max: '1431px'},
        'xl': {max: '1119px'},
        'lg': {max: '1023px'},
        'md': {max: '767px'},
        'sm': {max: '639px'}
      },
      container:{
        padding: {
          xl: "0 1rem",
        }
      },
      backgroundPosition: {
        center: 'center top',
      }
    },
    plugins: [
      require('tw-elements/dist/plugin'),
      function ({ addComponents }) {
        addComponents({
          '.container': {
            maxWidth: '1200px',
            '@screen xl': {
              maxWidth: '1119px',
              padding: '0 10px'
            },
          }
        })
      }
    ]
  }
  