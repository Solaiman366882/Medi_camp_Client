/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors:{
        primary:"#001430",
        secondary:"#05e8c2",
        pera:"#525252",
        
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}