/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0b0b0b",
        fg: "#eaeaea",
        muted: "#9a9a9a",
      },
      fontSize: {
        hero: "clamp(2.2rem, 5vw, 4rem)",
        h2: "clamp(1.6rem, 3vw, 2.2rem)",
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};
