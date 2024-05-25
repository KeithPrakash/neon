/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {
      colors: {
        primaryCol: '#001897',
        secondaryCol: '#000F5C',
    },
  },
},
  plugins: [],
}

