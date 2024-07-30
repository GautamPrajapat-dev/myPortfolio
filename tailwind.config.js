/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "green-yellow": {
          50: "#fdfff5",
          100: "#fbffeb",
          200: "#f2ffcc",
          300: "#e7ffab",
          400: "#cfff6e",
          500: "#adff2f",
          600: "#92e625",
          700: "#6fbf19",
          800: "#539911",
          900: "#377309",
          950: "#1f4a04",
        },
      },
    },
  },

  plugins: [],
};
