import Markdoc from "@markdoc/markdoc";

import type {Scrap, ScrapListing, ScrapStore} from "../../scrap";

class StableStore implements ScrapStore {
  readonly host: string;

  constructor(host = "http://localhost:8080") {
    this.host = host
  }

  async getScrapBySlug(slug: string): Promise<Scrap> {
    const response = await fetch(this.host + "/posts/" + slug)
    const {published_at, body, ...post} = await response.json()
    const ast = Markdoc.parse(body)
    return {...post, body: Markdoc.transform(ast), date: published_at}
  }

  async getScrapsListings(): Promise<ScrapListing[]> {
    const response = await fetch(this.host + "/posts")
    const postListings = await response.json()
    return postListings.map(({published_at, ...post}: {published_at: string, post: ScrapListing}) => ({...post, date: published_at}))
  }

  async getScrapsSlugs(): Promise<string[]> {
    const response = await fetch(this.host + "/posts")
    const postListings = await response.json()
    return postListings.map(({slug}: ScrapListing) => slug)
  }
}

export default StableStore
