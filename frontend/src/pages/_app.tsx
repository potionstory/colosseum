import { useEffect } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Layout from "../components/base/Layout";
import "../styles/tailwind.css";
import "../styles/globals.css";
import { darkTheme } from "../../stitches.config";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: "light",
        dark: darkTheme.className,
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
