import React from "react";

type ArticleProps = {
  title: string | React.ReactElement;
  tagline?: string | React.ReactElement;
};

const Article: React.FC<ArticleProps> = ({
  title,
  tagline,
  children,
}) => (
  <article className="prose prose-slate prose-xl">
    <h1>{title}</h1>
    {tagline && (
      <p className="lead">
        <em>{tagline}</em>
      </p>
    )}

    {children}
  </article>
);

export default Article;
