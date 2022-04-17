import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import React from "react";
import Article from "../../components/Article";
import Layout from "../../components/Layout";
import Time from "../../components/semantic/Time";
import { getScrapBySlug, getScrapSlugs } from "../../lib/scrap";

import type { Scrap } from "../../lib/scrap";

type ScrapPageProps = {
  scrap: Scrap;
};

const ScrapPage: NextPage<ScrapPageProps> = ({ scrap }) => {
  const publishedAtDate = new Date(scrap.publishedAt);

  return (
    <Layout title={scrap.title}>
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
