import Link from "next/link";
import Article, { ArticleHeader } from "../../components/Article";
import Layout from "../../components/Layout";
import { getAllScrapsForIndex } from "../../lib/graphcms";
import type { ScrapListing } from "../../lib/scrap";

type ScrapsPageProps = {
  scraps: ScrapListing[];
};

const ScrapsPage = ({ scraps }: ScrapsPageProps) => {
  return (
    <Layout>
      <Article>
        <ArticleHeader>
          <h1>Scraps</h1>
          <small>Rough thoughts, hastily formed.</small>
        </ArticleHeader>

        {scraps.map(({ slug, title }) => (
          <h2 key={slug}>
            <Link href={`/scraps/${slug}`}>
              <a>{title}</a>
            </Link>
          </h2>
        ))}
      </Article>
    </Layout>
  );
};

export default ScrapsPage;

export async function getStaticProps(): Promise<{ props: ScrapsPageProps }> {
  const scraps = await getAllScrapsForIndex();
  return { props: { scraps } };
}
