import { styled } from "../stitches.config";
import Flow from "./composition/Flow";

export default styled(Flow, {
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

export const ArticleHeader = styled(Flow, {
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
