/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#5e5768",
          200: "#5E5768"
        },
        secondary: {
          100: "#928779",
          200: "#D4D2A5"
        },
        light: {
          100: "#FFE4F3"
        }
      },
      scale: {
        .7: 7/10
      },
      backgroundImage:{
        'loginWave': 'url(./src/assets/loginTopWave.svg)' 
      }
    },
  },
  plugins: [],
}