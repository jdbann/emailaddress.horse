import Link from "next/link";
import Article from "../../components/Article";
import Layout from "../../components/Layout";
import Time from "../../components/semantic/Time";
import { getAllScrapsForIndex } from "../../lib/graphcms";
import type { ScrapListing } from "../../lib/scrap";

type ScrapsPageProps = {
  scraps: ScrapListing[];
};

const ScrapsPage = ({ scraps }: ScrapsPageProps) => {
  return (
    <Layout title="Scraps">
      <Article title="Scraps" tagline="Rough thoughts, hastily formed.">
        {scraps.map(({ slug, title, publishedAt }) => {
          const publishedAtDate = new Date(publishedAt);

          return (
            <article key={slug}>
              <h2>
                <Link href={`/scraps/${slug}`}>
                  <a>{title}</a>
                </Link>
              </h2>
              <p>
                <Time dateTime={publishedAtDate} />
              </p>
            </article>
          );
        })}
      </Article>
    </Layout>
  );
};

export default ScrapsPage;

export async function getStaticProps(): Promise<{ props: ScrapsPageProps }> {
  const scraps = await getAllScrapsForIndex();
  return { props: { scraps } };
}
