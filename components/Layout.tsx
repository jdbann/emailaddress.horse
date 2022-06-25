import Head from "next/head";
import React from "react";
import Article from "./Article";
import Cluster from "./composition/Cluster";
import Container from "./composition/Container";

import * as Nav from "./Nav";
import Time from "./semantic/Time";
import ThemeSwitcher from "./ThemeSwitcher";

type LayoutProps = {
  title?: string;
  date?: string;
  tagline?: string;
};

const Layout: React.FC<LayoutProps> = ({ children, title, date, tagline }) => {
  const parsedDate = date ? new Date(date) : null;
  return (
    <>
      <Head>
        <title>{title ? `${title} - ` : ""}emailaddress.horse</title>
        <meta name="description" content="John Bannister's assorted nonsense" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container width="6xl" centre>
        <Container
          width="measure"
          padding
          as={Cluster}
          direction="column"
          css={{ gap: "$32" }}
        >
          <Cluster as="header" spaced css={{ width: "$100" }}>
            <Nav.Root>
              <Nav.Link href="/">emailaddress.horse</Nav.Link>
              <Nav.Link href="/scraps">Scraps</Nav.Link>
            </Nav.Root>

            <ThemeSwitcher />
          </Cluster>

          <main>
            <Article
              title={title || "emailaddress.horse"}
              tagline={parsedDate ? <Time dateTime={parsedDate} /> : tagline}
            >
              {children}
            </Article>
          </main>

          <footer>
            <Nav.Root>
              <Nav.Link href="https://twitter.com/jdbannister">
                @jdbannister
              </Nav.Link>
            </Nav.Root>
          </footer>
        </Container>
      </Container>
    </>
  );
};

export default Layout;
