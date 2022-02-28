import type { NextPage } from "next";

import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <article>
        <header>
          <h1>
            email
            <wbr />
            address
            <wbr />
            .horse
          </h1>
          <span>John Bannister's assorted nonsense</span>
        </header>

        <p>
          Hi! I&apos;m John Bannister. Or{" "}
          <a href="https://twitter.com/jdbannister">@jdbannister</a> if
          you&apos;re a Twitter person.
        </p>
        <p>
          I&apos;m a web developer, currently working at{" "}
          <a href="https://uk.bookshop.org">Bookshop.org</a>.
        </p>
        <p>
          Right now I&apos;m finishing off work on{" "}
          <a href="https://exlibrisrpg.com">Ex Libris RPG</a> - a database of
          indie RPG content, funded by the community in a{" "}
          <a href="http://kickstarter.com/projects/waltonwood/ex-libris">
            Kickstarter campaign
          </a>{" "}
          last year.
        </p>
      </article>
    </Layout>
  );
};

export default Home;
