/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        pastel: {
          primary: "#FFEFEF",
          secondary: "#F3D0D7",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "night",
    ],
  },
  darkMode: ["class", '[data-theme="night"]'],
};
