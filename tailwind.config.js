/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Yellow: "hsl(47, 88%, 63%)",
        White: "hsl(0, 0%, 100%)",
        Grey: "hsl(0, 0%, 50%)",
        Black: "hsl(0, 0%, 7%)",
      },
      dropShadow: {
        "card-shadow": "8px 8px 0px #000",
        "card-hover-shadow": "16px 16px 0px #000",
      },
    },
  },
  plugins: [],
};
