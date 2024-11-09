/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f3490d', //orange
        secondary: '#f8faf9', //gray
        hoverColor: '#fff2df', //light orange
      },
    },
  },
  plugins: [],
}

