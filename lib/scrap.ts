import fs from "fs";
import { join } from "path";
import Markdoc from "@markdoc/markdoc";
import yaml from "js-yaml";

export type ScrapListing = {
  slug: string;
  title?: string;
  date?: string;
  tagline?: string;
};

export type Frontmatter = {
  title?: string;
  date?: Date;
  tagline?: string;
};

const scrapsDirectory = join(process.cwd(), "pages/scraps");

export function getScrapSlugs(): string[] {
  return fs
    .readdirSync(scrapsDirectory)
    .filter((slug) => slug.match(/\.md$/) !== null)
    .map((slug) => slug.replace(/\.md$/, ""));
}

export function getScrapBySlug(slug: string): ScrapListing {
  const fullPath = join(scrapsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const ast = Markdoc.parse(fileContents);
  const frontmatter = (
    ast.attributes.frontmatter ? yaml.load(ast.attributes.frontmatter) : {}
  ) as Frontmatter;

  return {
    slug,
    ...frontmatter,
    date: frontmatter.date?.toISOString(),
  } as ScrapListing;
}

export function getScrapListings(): ScrapListing[] {
  return getScrapSlugs()
    .map((slug) => {
      return { ...getScrapBySlug(slug) };
    })
    .sort((a, b) => (new Date(a.date || "") < new Date(b.date || "") ? 1 : -1));
}
