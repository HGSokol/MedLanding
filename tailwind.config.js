/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial":
          "linear-gradient(281deg, rgba(231, 240, 252, 0.44) 0%, #F6F7F9 75.01%)",
        "gradient-service": "linear-gradient(116deg, #3563E9 0%, #638BFF 100%)",
      },
    },
    fontFamily: {
      mont: ["Montserrat", "sans-serif"],
    },
    colors: {
      dark: "#202020",
      grey: "#4A4F53",
      "light-blue": "#96989A",
      background: "#FAFAFA",
      white: "#FFFFFF",
      "dark-blue": "#1941B9",
      blue: "#C73535",
      "sky-blue": "#D0E4FF",
    },
  },
  plugins: [],
};
