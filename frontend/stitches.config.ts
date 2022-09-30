import { createStitches } from "@stitches/react";

export const { styled, getCssText, createTheme, globalCss } = createStitches({
  theme: {
    colors: {
      theme: "#FFFFFF",
      "theme-inverse": "#000000",
      "neutral-main": "#687076",
      "neutral-sub": "#F1F3F5",
      "primary-main": "#7828C8",
      "primary-sub": "#EADCF8",
      "secondary-main": "#0072F5",
      "secondary-sub": "#CEE4FE",
      "success-main": "#17C964",
      "success-sub": "#DAFBE8",
      "warning-main": "#F5A524",
      "warning-sub": "#FDEFD8",
      "error-main": "#F31260",
      "error-sub": "#FDD8E5",
    },
  },

  media: {
    bp1: "(min-width: 640px)",
    bp2: "(min-width: 768px)",
    bp3: "(min-width: 1024px)",
  },
});

export const darkTheme = createTheme({
  colors: {
    theme: "#000000",
    "theme-inverse": "#FFFFFF",
    "neutral-main": "#9BA1A6",
    "neutral-sub": "#16181A",
    "primary-main": "#9750DD",
    "primary-sub": "#1F0A33",
    "secondary-main": "#0072F5",
    "secondary-sub": "#10253E",
    "success-main": "#17C964",
    "success-sub": "#042F14",
    "warning-main": "#F5A524",
    "warning-sub": "#3A2503",
    "error-main": "#F31260",
    "error-sub": "#300313",
  },
});

const GlobalStyles = globalCss({
  body: {
    padding: 0,
    margin: 0,
    backgroundColor: "$theme",
    fontFamily: `'Spoqa Han Sans Neo', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
  },
  a: {
    color: "inherit",
    textDecoration: "none",
  },
});

GlobalStyles();
