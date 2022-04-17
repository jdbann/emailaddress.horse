import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

export type Scrap = ScrapListing & {
  body: string;
  parsedBody?: string;
};

export type ScrapListing = {
  title: string;
  slug: string;
  publishedAt: string;
};

const scrapsDirectory = join(process.cwd(), "posts");

export function getScrapSlugs(): string[] {
  return fs
    .readdirSync(scrapsDirectory)
    .map((slug) => slug.replace(/\.mdx$/, ""));
}

export function getScrapBySlug(slug: string): Scrap {
  const fullPath = join(scrapsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    body: content,
    title: data.title,
    slug: slug,
    publishedAt: data.date.toISOString(),
  };
}

export function getScrapListings(): ScrapListing[] {
  return getScrapSlugs()
    .map((slug) => {
      return { ...getScrapBySlug(slug) };
    })
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}
