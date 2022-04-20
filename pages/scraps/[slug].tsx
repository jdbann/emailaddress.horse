import Article from "../../components/Article";
import Layout from "../../components/Layout";
import Markdown from "../../components/Markdown";
import Time from "../../components/semantic/Time";
import { getScrapBySlug, getScrapSlugs } from "../../lib/scrap";
import { serialize } from "../../lib/mdx";

import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import type { ParsedScrap } from "../../lib/scrap";

type ScrapPageProps = {
  scrap: ParsedScrap;
};

const ScrapPage: NextPage<ScrapPageProps> = ({ scrap }) => {
  const publishedAtDate = new Date(scrap.publishedAt);

  return (
    <Layout title={scrap.title}>
      <Article
        title={scrap.title}
        tagline={<Time dateTime={publishedAtDate} />}
      >
        <Markdown compiledSource={scrap.parsedBody} />
      </Article>
    </Layout>
  );
};

export default ScrapPage;

type ScrapPageParams = {
  slug: string;
};

export const getStaticPaths: GetStaticPaths<ScrapPageParams> = async () => {
  const slugs = getScrapSlugs();
  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  ScrapPageProps,
  ScrapPageParams
> = async ({ params }) => {
  const scrap = getScrapBySlug(params!.slug);
  const { compiledSource: parsedBody } = await serialize(scrap.body);
  return {
    props: {
      scrap: {
        ...scrap,
        parsedBody,
      },
    },
  };
};
