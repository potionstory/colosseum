import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Layout from "../components/base/Layout";
import globalStyles from "../styles/globalStyles";
import { darkTheme } from "../styles/stitches.config";

globalStyles();

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
