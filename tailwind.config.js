/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-beige": "#ECDFCC",
        //"custom-beige": "#FFFF",
        darkblue: "#171718",
        olive: "#697565",
      },
    },
  },
  plugins: [],
};
