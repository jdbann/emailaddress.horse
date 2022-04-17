import React from "react";
import Prose, { Lead } from "./Prose";

type ArticleProps = {
  as?: string | React.ComponentType<any>;
  title: string | React.ReactElement;
  tagline?: string | React.ReactElement;
};

const Article: React.FC<ArticleProps> = ({
  as = "article",
  title,
  tagline,
  children,
}) => (
  <Prose as={as} size="xl">
    <h1>{title}</h1>
    {tagline && (
      <Lead>
        <em>{tagline}</em>
      </Lead>
    )}

    {children}
  </Prose>
);

export default Article;
