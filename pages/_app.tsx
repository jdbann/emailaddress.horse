import type { AppProps } from "next/app";
import "@fontsource/fraunces/variable-full.css";
import "@fontsource/fraunces/variable-full-italic.css";
import { globalCss } from "../stitches.config";
import "modern-css-reset";

const globalStyles = globalCss({
  "@media (prefers-reduced-motion)": {
    transition: "none",
  },

  html: {
    fontFamily: "$serif",
    fontVariationSettings: '"WONK" 1,"SOFT" 100',
  },
  body: {
    backgroundColor: "$blue1",
    color: "$blue12",
  },
  a: {
    color: "inherit",
    transition: "$quick",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return <Component {...pageProps} />;
}

export default MyApp;
