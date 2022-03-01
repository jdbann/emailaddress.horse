import type { AppProps } from "next/app";
import { darkTheme, globalCss, theme } from "../stitches.config";
import "modern-css-reset";
import { ThemeProvider } from "next-themes";

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
    color: "$blue12",
  },
  a: {
    color: "inherit",
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
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
