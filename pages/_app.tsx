import type {AppProps} from "next/app";
import {ThemeProvider} from "next-themes";
import Head from "next/head";
import PlausibleProvider from "next-plausible";
import Layout from "../components/Layout";
import "../styles/globals.css"

function MyApp({Component, pageProps}: AppProps) {
  return (
    <PlausibleProvider
      domain="emailaddress.horse"
      customDomain="https://stats.emailaddress.horse"
      trackOutboundLinks
    >
      <ThemeProvider
        defaultTheme="system"
        attribute="class"
        value={{dark: "dark", light: "light"}}
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
