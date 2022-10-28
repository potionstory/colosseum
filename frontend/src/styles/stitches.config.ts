import { createStitches } from "@stitches/react";

export const { styled, createTheme } = createStitches({
  theme: {
    colors: {
      theme: "#FFFFFF",
      "theme-blur": "rgba(255, 255, 255, 0.5)",
      "theme-inverse": "#161616",
      neutral: "#687076",
      "neutral-inverse": "#26292B",
      "primary-main": "#7828C8",
      "primary-main-blur": "rgba(120, 40, 200, 0.5)",
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
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
  },
});

export const darkTheme = createTheme({
  colors: {
    theme: "#161616",
    "theme-blur": "rgba(22, 22, 22, 0.5)",
    "theme-inverse": "#FFFFFF",
    neutral: "#9BA1A6",
    "neutral-inverse": "#ECEDEE",
    "primary-main": "#9750DD",
    "primary-main-blur": "rgba(151, 80, 221, 0.5)",
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
