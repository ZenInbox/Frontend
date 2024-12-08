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
        secondary: '#eff1f0', //gray
        hoverColor: '#fff2df', //light orange
        hoverButtonColor: '#bf360c' //deep prange
      },
      boxShadow: {
        pink: '0 10px 20px rgba(255, 105, 180, 0.5)', // Custom pink shadow
      },
    },
  },
  plugins: [],
}

