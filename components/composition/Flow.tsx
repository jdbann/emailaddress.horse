import { styled } from "../../stitches.config";

export default styled("div", {
  "& > * + *": {
    marginTop: "$$spacing",
  },

  variants: {
    spacing: {
      sm: {
        $$spacing: "$space$2",
      },
      md: {
        $$spacing: "$space$6",
      },
    },
  },

  defaultVariants: {
    spacing: "md",
  },
});
