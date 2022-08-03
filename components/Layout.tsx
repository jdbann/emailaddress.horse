import Head from "next/head";
import React from "react";
import Article from "./Article";

import * as Nav from "./Nav";
import Time from "./semantic/Time";
import ThemeSwitcher from "./ThemeSwitcher";

type LayoutProps = {
  title?: string;
  date?: string;
  tagline?: string;
};

const Layout: React.FC<LayoutProps> = ({children, title, date, tagline}) => {
  const parsedDate = date ? new Date(date) : null;
  return (
    <>
      <Head>
        <title>{title ? `${title} - ` : ""}emailaddress.horse</title>
        <meta name="description" content="John Bannister's assorted nonsense" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-6xl mx-auto box-content">
        <div className="flex flex-col p-10 max-w-prose box-content gap-32">
          <div className="flex flex-row justify-between w-full gap-4">
            <Nav.Root>
              <Nav.Link href="/">emailaddress.horse</Nav.Link>
              <Nav.Link href="/scraps">Scraps</Nav.Link>
            </Nav.Root>

            <ThemeSwitcher />
          </div>

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
        </div>
      </div>
    </>
  );
};

export default Layout;
