/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#F7F7F9",
        dark: "#2B2D42",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        fraunces: ["Fraunces", "serif"],
        nunito: ["Nunito", "serif"],
      },
      pointerEvents: {
        auto: "auto",
      },
    },
  },
  plugins: [],
};
