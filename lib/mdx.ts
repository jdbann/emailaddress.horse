import { serialize as mdxSerialize } from "next-mdx-remote/serialize";
import rehypeImgSize from "rehype-img-size";

import type { PluggableList } from "@mdx-js/mdx/lib/core";

export const serialize = (body: string) =>
  mdxSerialize(body, {
    mdxOptions: {
      rehypePlugins: [[rehypeImgSize, { dir: "public" }]] as PluggableList,
    },
  });
