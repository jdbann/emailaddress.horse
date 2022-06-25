import Link from "next/link";
import Time from "../../components/semantic/Time";
import { getScrapListings } from "../../lib/scrap";

import type { ScrapListing } from "../../lib/scrap";

type ScrapsPageProps = {
  scraps: ScrapListing[];
  markdoc: {
    frontmatter: {
      title: string;
      tagline: string;
    };
  };
};

const ScrapsPage = ({ scraps }: ScrapsPageProps) => {
  return (
    <>
      {scraps.map(({ slug, date, title }) => {
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
    </>
  );
};

export default ScrapsPage;

export async function getStaticProps(): Promise<{ props: ScrapsPageProps }> {
  const scraps = getScrapListings();
  return {
    props: {
      scraps,
      markdoc: {
        frontmatter: {
          title: "Scraps",
          tagline: "Rough thoughts, hastily formed.",
        },
      },
    },
  };
}
