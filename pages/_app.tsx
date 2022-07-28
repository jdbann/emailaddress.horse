import type {AppProps} from "next/app";
import {darkTheme, globalStyles, theme} from "../stitches.config";
import {ThemeProvider} from "next-themes";
import Head from "next/head";
import PlausibleProvider from "next-plausible";
import Layout from "../components/Layout";

function MyApp({Component, pageProps}: AppProps) {
  globalStyles();

  return (
    <PlausibleProvider
      domain="emailaddress.horse"
      customDomain="https://stats.emailaddress.horse"
      trackOutboundLinks
    >
      <ThemeProvider
        defaultTheme="system"
        attribute="class"
        value={{dark: darkTheme.toString(), light: theme.toString()}}
      >
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        {pageProps.markdoc !== undefined ? (
          <Layout {...pageProps.markdoc.frontmatter}>
            <Component {...pageProps} />
          </Layout>
        ) : (
          <Component {...pageProps} />
        )}
      </ThemeProvider>
    </PlausibleProvider>
  );
}

export default MyApp;
