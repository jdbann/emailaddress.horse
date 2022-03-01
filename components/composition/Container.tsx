import { styled } from "../../stitches.config";

export default styled("div", {
  boxSizing: "content-box",

  variants: {
    width: {
      measure: {
        width: "$measure",
      },
      "6xl": {
        width: "$6xl",
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
