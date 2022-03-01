import type { AppProps } from "next/app";
import "@fontsource/fraunces/variable-full.css";
import { globalCss } from "../stitches.config";
import "modern-css-reset";

const globalStyles = globalCss({
  html: {
    fontFamily: "FrauncesVariable",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return <Component {...pageProps} />;
}

export default MyApp;
