import { styled } from "../stitches.config";

const Button = styled("button", {
  margin: "$0",
  padding: "$2",
  borderRadius: "$small",
  color: "$slate11",
  cursor: "pointer",
  boxSizing: "border-box",

  "&:hover, &:focus": {
    backgroundColor: "$slate3",
    color: "$slate12",
  },

  variants: {
    style: {
      ghost: {
        border: "none",
        backgroundColor: "transparent",
      },
    },
  },
});

export default Button;
