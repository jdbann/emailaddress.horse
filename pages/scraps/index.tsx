import Link from "next/link";
import Time from "../../components/semantic/Time";
import {store} from "../../lib/scrap";

import type {ScrapListing} from "../../lib/scrap";
import Layout from "../../components/Layout";

type ScrapsPageProps = {
  scraps: ScrapListing[];
};

const ScrapsPage = ({scraps}: ScrapsPageProps) => {
  return (
    <>
      <Layout title="Scraps" tagline="Rough thoughts, hastily formed.">
        {scraps.map(({slug, date, title}) => {
          return (
            <article key={slug}>
              <h2>
                <Link href={`/scraps/${slug}`}>
                  <a>{title}</a>
                </Link>
              </h2>
              <p>
                <Time dateTime={new Date(date!)} />
              </p>
            </article>
          );
        })}
      </Layout>
    </>
  );
};

export default ScrapsPage;

export async function getStaticProps(): Promise<{props: ScrapsPageProps}> {
  const scraps = await store.getScrapsListings();
  return {props: {scraps}};
}
