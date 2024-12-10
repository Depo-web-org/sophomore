/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#536CB3",
        secondary: "#F15C54",
        textopacity: "#FFFFFF70",
        dark: "#0a142f",
      },
      container: {
        center: true,
        padding: "1rem",
      },
      screens: {
        md: "768px",
        xl: "1280px",
      },
      width: {
        "custom-md": "calc(100% - 124px)",
        "custom-xl": "80%",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
