/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-sky": "#0FCFEC",
        "secondary-accent": "#19D3AE",
        "custom-slate": "#3A4256",
      },
    },
  },
  plugins: [require("daisyui")],
};
