module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}', './sections/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mainbg: '#FEFBEA',
        primary: '#7A5BE8',
        primary2: '#E76EC7',
        secondary: '#D45915',
      },
      typography: {
        DEAFAULT: {
          css: {
          h1: {
              fontFamily: 'Poppins',
          },
          h2: {
              fontFamily: 'Poppins',
          },
          h3: {
              fontFamily: 'Poppins',
          },
          h4: {
              fontFamily: 'Poppins',
          },
          h5: {
              fontFamily: 'Poppins',
          },
          h6: {
              fontFamily: 'Poppins',
            },
          }
        }
      },
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
        secondary: ['Montserrat', 'sans-serif']
      },
      width: {
        '30': '30%',
        '40': '40%',
        '70': '70%',
        '16rem': '16rem',
        half: '50%',
        quarter_past: '75%'
      },
      height: {
        '90vh': '90vh'
      },
      zIndex: {
        '100': 100
      },
      maxHeight: {
        '30': '7rem'
      },
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
        
        'midLg': {'max': '900px'},
        // => @media (max-width: 900px) { ... }

        'md': {'max': '769px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
}