import React from "react";
import { css } from "../stitches.config";
import Flow from "./composition/Flow";

type ArticleProps = {
  title: string | React.ReactElement;
  tagline?: string | React.ReactElement;
};

const Article: React.FC<ArticleProps> = ({ title, tagline, children }) => (
  <Flow as="article">
    <Flow
      as="header"
      spacing="sm"
      css={{
        p: {
          fontSize: "$2xl",
          fontStyle: "italic",
          fontWeight: "$light",
        },
      }}
    >
      <h1>{title}</h1>
      {tagline && <p>{tagline}</p>}
    </Flow>

    {children}
  </Flow>
);

export default Article;
