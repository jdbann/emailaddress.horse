import { styled } from "../../stitches.config";

export default styled("div", {
  "& > * + *": {
    marginTop: "$6",
  },
});
