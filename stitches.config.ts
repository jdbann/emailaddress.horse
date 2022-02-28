import { blue, blueDark } from "@radix-ui/colors";
import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      ...blue,
    },
    sizes: {
      measure: "65ch",
    },
  },
});

const darkTheme = createTheme({
  colors: {
    ...blueDark,
  },
});
