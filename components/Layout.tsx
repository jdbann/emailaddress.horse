import Head from "next/head";
import React from "react";
import Cluster from "./composition/Cluster";
import Container from "./composition/Container";

import Nav from "./Nav";

type LayoutProps = {
  title?: string;
};

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title && `${title} - `}emailaddress.horse</title>
        <meta name="description" content="John Bannister's assorted nonsense" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container width="6xl" centre>
        <Container width="measure" padding>
          <Cluster direction="column" css={{ gap: "$32" }}>
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
          </Cluster>
        </Container>
      </Container>
    </>
  );
};

export default Layout;
