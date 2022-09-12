import { useEffect } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import "../styles/tailwind.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      //check if there is any key for theme in local storage and if the system color theme is dark
      document.documentElement.classList.remove("light"); //OPTIONAL - remove light from the html document if any
      document.documentElement.classList.add("dark"); // add dark to the <html></html> itself as <html class='dark'></html>
    } else {
      document.documentElement.classList.remove("dark"); // remove dark from the html document if any
      document.documentElement.classList.add("light"); //OPTIONAL - add light to the <html></html> itself as <html class='light'></html>
    }
  }, []);

  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
