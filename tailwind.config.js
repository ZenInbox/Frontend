/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        //giving temporary colors for now, will be changed later
        primary: '#e65100', //orange
        secondary: '#f8faf9', //gray
        hoverColor: '#fff2df', //light orange
        hoverButtonColor: '#bf360c' //deep prange
      },
    },
  },
  plugins: [],
}

