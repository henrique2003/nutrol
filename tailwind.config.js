/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        green: "#69CB3E",
        darkGreen: '#39A925',
        white: '#FFFFFF',
        black: '#000000',
        lightGrey: '#F5F5F5',
        grey: '#9F9F9F',
        dark: '#464646',
      },
    },
  },
  plugins: [],
};
