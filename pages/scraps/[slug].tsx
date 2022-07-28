import Layout from "../../components/Layout";
import Markdoc from "@markdoc/markdoc"
import React from "react";
import invariant from "tiny-invariant";
import {store} from "../../lib/scrap"

import type {ScrapProps} from "../../lib/scrap"
import type {GetStaticPaths, GetStaticProps} from "next";

type ScrapPageProps = {
  scrap: ScrapProps
}

const ScrapPage = ({scrap}: ScrapPageProps) => {
  const body = Markdoc.renderers.react(JSON.parse(scrap.body), React, {})

  return <>
    <Layout title={scrap.title} date={scrap.date}>
      {body}
    </Layout>
  </>
}

export default ScrapPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await store.getScrapsSlugs()
  const paths = slugs.map(slug => ({params: {slug}}))
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<ScrapPageProps> = async (context) => {
  const slug = context.params?.slug
  invariant(slug, "expected params to be defined")
  invariant(!Array.isArray(slug), "expected a single slug")
  const scrap = await store.getScrapBySlug(slug)
  const scrapProps = {
    ...scrap,
    body: JSON.stringify(scrap.body),
  }

  return {
    props: {scrap: scrapProps}
  }
}
