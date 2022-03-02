import { Scrap, ScrapListing } from "./scrap";

async function fetchAPI(
  query: string,
  { variables, preview }: { variables?: object; preview?: boolean } = {}
) {
  const res = await fetch(process.env.GRAPHCMS_PROJECT_API!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${
        preview
          ? process.env.GRAPHCMS_DEV_AUTH_TOKEN
          : process.env.GRAPHCMS_PROD_AUTH_TOKEN
      }`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  const json = await res.json();

  if (json.errors) {
    console.log(process.env.NEXT_EXAMPLE_CMS_GCMS_PROJECT_ID);
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
}

export async function getAllScrapsForIndex(): Promise<ScrapListing[]> {
  const data = await fetchAPI(`
  {
    scraps {
      title
      slug
    }
  }
  `);
  return data.scraps;
}

export async function getAllScrapsWithSlug(): Promise<{ slug: string }[]> {
  const data = await fetchAPI(`
      {
        scraps {
          slug
        }
      }
    `);
  return data.scraps;
}

export async function getScrap(slug: string, preview: boolean): Promise<Scrap> {
  const data = await fetchAPI(
    `
        query ScrapBySlug($slug: String!, $stage: Stage!) {
          scrap(stage: $stage, where: {slug: $slug}) {
            title
            slug
            body
          }
        }
      `,
    {
      preview,
      variables: {
        stage: preview ? "DRAFT" : "PUBLISHED",
        slug,
      },
    }
  );
  return data.scrap;
}
