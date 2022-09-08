/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  purge: [
    // Use *.tsx if using TypeScript
    "./src/pages/**/*.tsx",
  ],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
};
