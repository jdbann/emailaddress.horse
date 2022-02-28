import Head from "next/head";
import React from "react";
import { styled } from "../stitches.config";

import Nav from "./Nav";

type LayoutProps = {
  className?: string;
  title?: string;
};

const Layout: React.FC<LayoutProps> = ({ children, className, title }) => {
  return (
    <>
      <Head>
        <title>{title && `${title} - `}emailaddress.horse</title>
        <meta name="description" content="John Bannister's assorted nonsense" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={className}>
        <header>
          <Nav.Root>
            <Nav.Link href="/">emailaddress.horse</Nav.Link>
            <Nav.Link href="/scraps">Scraps</Nav.Link>
          </Nav.Root>
        </header>

        <main>{children}</main>

        <footer>
          <Nav.Root>
            <Nav.Link href="https://twitter.com/jdbannister">
              @jdbannister
            </Nav.Link>
          </Nav.Root>
        </footer>
      </div>
    </>
  );
};

export default styled(Layout, {
  width: "$measure",
});
