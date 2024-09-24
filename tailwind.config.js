/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      screens: {
        sm: "640px",
        md: "786px",
        lg: "1024px",
        "2xl": "1280px"
      },
      padding: {
        DEFAULT: '10px',
      }
    },
    fontFamily: {
      'jsans': ["Josefin Sans", "sans-serif"],
      'lato': ["Lato", "sans-serif"],
    },
    backgroundImage: {
      'update': "url('/src/assets/update.png')",
    },
    extend: {},
  },
  plugins: [],
}