import {RenderableTreeNode} from "@markdoc/markdoc";
import FsStore from "./adapters/store/fs";

export const store = new FsStore()

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
