import Markdoc from "@markdoc/markdoc";
import fs from 'fs';
import yaml from "js-yaml";
import {join} from "path";

import type {Scrap, ScrapListing, ScrapStore} from "../../scrap";

type Frontmatter = {
  title?: string;
  date?: Date;
  tagline?: string;
};

class FsStore implements ScrapStore {
  readonly scrapsPath: string;

  constructor(scrapsPath = "content/scraps") {
    this.scrapsPath = join(process.cwd(), scrapsPath);
  }

  async getScrapBySlug(slug: string): Promise<Scrap> {
    const fullPath = join(this.scrapsPath, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const ast = Markdoc.parse(fileContents);
    const frontmatter = (
      ast.attributes.frontmatter ? yaml.load(ast.attributes.frontmatter) : {}
    ) as Frontmatter;

    return {
      slug,
      body: Markdoc.transform(ast),
      ...frontmatter,
      date: frontmatter.date?.toISOString(),
    } as Scrap;
  }

  async getScrapsListings(): Promise<ScrapListing[]> {
    const slugs = await this.getScrapsSlugs()

    const scraps = await Promise.all(slugs.map(async (slug) => {
      const {title, date} = await this.getScrapBySlug(slug);
      return {slug, title, date}
    }))
    return scraps.sort((a, b) => (new Date(a.date || "") < new Date(b.date || "") ? 1 : -1));
  }

  async getScrapsSlugs(): Promise<string[]> {
    return fs
      .readdirSync(this.scrapsPath)
      .filter((slug) => slug.match(/\.md$/) !== null)
      .map((slug) => slug.replace(/\.md$/, ""));
  }
}

export default FsStore
