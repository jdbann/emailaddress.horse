import type {
  StyledComponentProps,
  StyledComponentType,
} from "@stitches/react/types/styled-component";
import React from "react";
import { styled } from "../stitches.config";
import Flow from "./composition/Flow";

const Article: StyledComponentType<[React.FC]> = (
  props: StyledComponentProps<["article"]>
) => <Flow as="article" {...props} />;

export default styled(Article, {
  color: "$slate11",

  p: {
    fontWeight: "$light",
    fontSize: "$xl",
    color: "$slate11",
  },

  a: {
    color: "$slate12",
  },
});

const ArticleHeader: StyledComponentType<[React.FC]> = (
  props: StyledComponentProps<["header"]>
) => <Flow as="header" {...props} />;

const StyledArticleHeader = styled(ArticleHeader, {
  h1: {
    marginBottom: "$4",
    fontSize: "$6xl",
    fontWeight: "$normal",
    lineHeight: "$none",
    color: "$slate12",
  },

  small: {
    fontSize: "$2xl",
    fontStyle: "italic",
    fontWeight: "$light",
  },
});

export { StyledArticleHeader as ArticleHeader };
