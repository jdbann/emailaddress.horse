import { styled } from "../../stitches.config";

export default styled("div", {
  boxSizing: "content-box",

  variants: {
    width: {
      measure: {
        maxWidth: "$measure",
      },
      "6xl": {
        maxWidth: "$6xl",
      },
    },
    centre: {
      true: {
        marginLeft: "auto",
        marginRight: "auto",
      },
      false: {
        marginLeft: "initial",
        marginRight: "initial",
      },
    },
    padding: {
      true: {
        padding: "$10",
      },
    },
  },
});
