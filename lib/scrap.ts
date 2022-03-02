export type Scrap = ScrapListing & {
  body: string;
  parsedBody?: string;
};

export type ScrapListing = {
  title: string;
  slug: string;
};
