import type { AppProps } from "next/app";
import { darkTheme, globalCss, theme } from "../stitches.config";
import "modern-css-reset";
import { ThemeProvider } from "next-themes";
import Head from "next/head";

const globalStyles = globalCss({
  "@media (prefers-reduced-motion)": {
    transition: "none",
  },

  "*": {
    fontFamily: "$serif",
    fontVariationSettings: '"WONK" 1,"SOFT" 100',
    transitionProperty: "all",
    transition: "$quick",
  },
  body: {
    backgroundColor: "$blue2",
    color: "$slate11",
  },

  a: {
    color: "$slate12",
    textUnderlineOffset: "6px",
    textDecorationColor: "transparent",
    textDecorationThickness: "1px",

    "&:hover": {
      textUnderlineOffset: "1px",
      textDecorationColor: "$slate12",
    },
  },

  "h1, h2": {
    fontWeight: "$normal",
    lineHeight: "$none",
    color: "$slate12",
  },
  h1: {
    fontSize: "$6xl",
  },
  h2: {
    fontSize: "$3xl",
  },

  p: {
    fontWeight: "$light",
    fontSize: "$xl",
    lineHeight: "$relaxed",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <ThemeProvider
      defaultTheme="system"
      attribute="class"
      value={{ dark: darkTheme.toString(), light: theme.toString() }}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
