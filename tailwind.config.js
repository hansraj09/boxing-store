/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      animation: {
        slide_from_right: 'slide_from_right 1s ease-in-out forwards',
        slide_from_right_delay: 'slide_from_right 1s ease-in-out 300ms forwards',
        slide_from_left: 'slide_from_left 1s ease-in-out forwards',
        slide_from_left_delay: 'slide_from_left 1s ease-in-out 300ms forwards',
      },
      keyframes: {
        slide_from_right: {
          '0%': { opacity: 0, transform: 'translateX(100%)' },
          '100%': { opacity: 1, transform: 'translateX(0%)' }
        },
        slide_from_left: {
          '0%': { opacity: 0, transform: 'translateX(-100%)' },
          '100%': { opacity: 1, transform: 'translateX(0%)' }
        },
      },
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sedgwick: ["Sedgwick Ave Display", "cursive"],
        cinzel: ["Cinzel", "serif"]
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}
