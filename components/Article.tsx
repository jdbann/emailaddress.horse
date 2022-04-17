import React from "react";
import { css } from "../stitches.config";
import Flow from "./composition/Flow";
import Prose from "./Prose";

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

    <Prose>{children}</Prose>
  </Flow>
);

export default Article;
