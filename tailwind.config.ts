/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./UI/**/*.{ts,tsx}"],
  theme: {
    fontSize: {
      sm: "1.2rem",
      base: "1.4rem",
      lg: "1.6rem",
      xl: "1.8rem",
      "2xl": "2rem",
      "3xl": "2.4rem",
      "4xl": "2.8rem",
      "5xl": "3.2rem",
      "6xl": "3.6rem",
      "7xl": "4rem",
      "8xl": "4.8rem",
      "9xl": "6rem",
    },
    screens: {
      phone: "240px",
      verticalphone: "480px",
      horizontalphone: "640px",
      tablet: "900px",
      laptop: "1024px",
      monitor: "1440px",
      screen: "1900px",
    },
    extend: {},
  },
  plugins: [],
};
