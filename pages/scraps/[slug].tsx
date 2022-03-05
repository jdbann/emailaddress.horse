import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import React from "react";
import Article from "../../components/Article";
import Layout from "../../components/Layout";
import Time from "../../components/semantic/Time";
import { getAllScrapsWithSlug, getScrap } from "../../lib/graphcms";
import { Scrap } from "../../lib/scrap";

type ScrapPageProps = {
  scrap: Scrap;
};

const ScrapPage: NextPage<ScrapPageProps> = ({ scrap }) => {
  const publishedAtDate = new Date(scrap.publishedAt);

  return (
    <Layout>
      <Article
        title={scrap.title}
        tagline={<Time dateTime={publishedAtDate} />}
      >
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

type ScrapPageParams = {
  slug: string;
};

export const getStaticPaths: GetStaticPaths<ScrapPageParams> = async () => {
  const scraps = await getAllScrapsWithSlug();
  return {
    paths: scraps.map(({ slug }: { slug: string }) => ({
      params: { slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  ScrapPageProps,
  ScrapPageParams
> = async ({ params, preview = false }) => {
  const scrap = await getScrap(params!.slug, preview);
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
