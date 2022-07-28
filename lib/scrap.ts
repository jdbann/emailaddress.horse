import {RenderableTreeNode} from "@markdoc/markdoc";
import FsStore from "./adapters/store/fs";
import StableStore from "./adapters/store/stable";

const buildStore = (): ScrapStore => {
  switch(process.env.STORE) {
    case 'fs':
      return new FsStore()
    case 'stable':
    default:
      return new StableStore(process.env.STABLE_HOST)
  }
}

export const store = buildStore()

export interface ScrapStore {
  getScrapBySlug(slug: string): Promise<Scrap>;
  getScrapsListings(): Promise<ScrapListing[]>;
  getScrapsSlugs(): Promise<string[]>;
}

export type ScrapListing = {
  slug: string;
  title: string;
  date: string;
};

export type Scrap = ScrapListing & {
  body: RenderableTreeNode;
}

export type ScrapProps = ScrapListing & {
  body: string;
}
