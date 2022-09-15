/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/pages/**/*.tsx", "./src/components/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        theme: "var(--theme)",
        "theme-inverse": "var(--theme-inverse)",
        "theme-inverse-blur": "var(--theme-inverse-blur)",
        "neutral-main": "var(--neutral-main)",
        "neutral-sub": "var(--neutral-sub)",
        "primary-main": "var(--primary-main)",
        "primary-sub": "var(--primary-sub)",
        "secondary-main": "var(--secondary-main)",
        "secondary-sub": "var(--secondary-sub)",
        "success-main": "var(--success-main)",
        "success-sub": "var(--success-sub)",
        "warning-main": "var(--warning-main)",
        "warning-sub": "var(--warning-sub)",
        "error-main": "var(--error-main)",
        "error-sub": "var(--error-sub)",
      },
    },
  },
  plugins: [],
};
