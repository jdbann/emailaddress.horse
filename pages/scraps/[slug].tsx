import type { GetStaticPathsResult, NextPage } from "next";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Article, { ArticleHeader } from "../../components/Article";
import Layout from "../../components/Layout";
import { getAllScrapsWithSlug, getScrap } from "../../lib/graphcms";
import { Scrap } from "../../lib/scrap";

type ScrapPageProps = {
  scrap: Scrap;
};

const ScrapPage: NextPage<ScrapPageProps> = ({ scrap }) => {
  return (
    <Layout>
      <Article>
        <ArticleHeader>
          <h1>{scrap.title}</h1>
        </ArticleHeader>

        {scrap.parsedBody ? (
          <MDXRemote compiledSource={scrap.parsedBody} />
        ) : (
          <p>Content missing&hellip;</p>
        )}
      </Article>
    </Layout>
  );
};

export default ScrapPage;

type ScrapPageGetStaticPropsArgs = {
  params: {
    slug: string;
  };
  preview: boolean;
};

export async function getStaticProps({
  params: { slug },
  preview = false,
}: ScrapPageGetStaticPropsArgs): Promise<{ props: ScrapPageProps }> {
  const scrap = await getScrap(slug, preview);
  const { compiledSource: parsedBody } = await serialize(scrap.body);
  return {
    props: {
      scrap: {
        ...scrap,
        parsedBody,
      },
    },
  };
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const scraps = await getAllScrapsWithSlug();
  return {
    paths: scraps.map(({ slug }: { slug: string }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}
