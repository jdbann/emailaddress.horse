import type { AppProps } from "next/app";
import "@fontsource/fraunces/variable-full.css";
import { globalCss } from "../stitches.config";
import "modern-css-reset";

const globalStyles = globalCss({
  html: {
    fontFamily: "FrauncesVariable",
  },
  body: {
    backgroundColor: "$blue1",
    color: "$blue12",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return <Component {...pageProps} />;
}

export default MyApp;
