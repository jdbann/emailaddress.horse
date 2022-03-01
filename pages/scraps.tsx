import { NextPage } from "next";
import Article, { ArticleHeader } from "../components/Article";
import Layout from "../components/Layout";

const Scraps: NextPage = () => {
  return (
    <Layout title="Scraps">
      <Article>
        <ArticleHeader>
          <h1>Scraps</h1>
          <small>Some bits and pieces I haven't fully thought through</small>
        </ArticleHeader>

        <p>Nothing to see here&hellip;</p>
      </Article>
    </Layout>
  );
};

export default Scraps;
