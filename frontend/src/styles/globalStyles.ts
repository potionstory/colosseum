import { globalCss } from "@stitches/react";

const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    font: "inherit",
    color: "inherit",
  },
  "*, :after, :before": {
    boxSizing: "border-box",
    flexShrink: 0,
  },
  ":root": {
    "-webkit-tap-highlight-color": "transparent",
    "-webkit-text-size-adjust": "100%",
    textSizeAdjust: "100%",
    cursor: "default",
    lineHeight: 1.5,
    overflowWrap: "break-word",
    wordBreak: "break-word",
    tabSize: 4,
  },
  "html, body": {
    height: "100%",
    backgroundColor: "$theme",
    fontFamily: `'Gothic A1', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
    color: "$theme-inverse",
  },
  "#__next": {
    height: "100%",
  },
  "img, picture, video, canvas, svg": {
    maxWidth: "100%",
  },
  button: {
    background: "none",
    border: 0,
    cursor: "pointer",
  },
  a: {
    textDecoration: "none",
    borderCollapse: "collapse",
    borderSpacing: 0,
  },
  "menu, ol, ul, dl": {
    listStyle: "none",
  },
});

export default globalStyles;
