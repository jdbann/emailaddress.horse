import { blue, blueDark, slate, slateDark } from "@radix-ui/colors";
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
      ...slate,
    },
    fonts: {
      sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      serif:
        'Fraunces, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
      mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    },
    fontSizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },
    fontWeights: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
    lineHeights: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
      3: ".75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
    },
    space: {
      px: "1px",
      0: "0",
      0.5: "0.125rem",
      1: "0.25rem",
      1.5: "0.375rem",
      2: "0.5rem",
      2.5: "0.625rem",
      3: "0.75rem",
      3.5: "0.875rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      14: "3.5rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      28: "7rem",
      32: "8rem",
      36: "9rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
      96: "24rem",
    },
    sizes: {
      measure: "55ch",
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      "7xl": "80rem",
      "100": "100%",
    },
    radii: {
      small: "4px",
    },
  },
});

export const darkTheme = createTheme({
  colors: {
    ...blueDark,
    ...slateDark,
  },
});

export const globalStyles = globalCss({
  // Reset styles
  "::before, ::after": {
    boxSizing: "border-box",
    borderWidth: 0,
    borderStyle: "solid",
    borderColor: "currentColor",
  },

  html: {
    lineHeight: 1.5,
    webkitTextSizeAdjust: "100%",
    mozTabSize: 4,
    tabSize: 4,
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  },

  body: {
    // Reset styles
    margin: 0,
    // lineHeight: "inherit",

    // Theme styles
    backgroundColor: "$blue2",
    color: "$slate11",
    fontFamily: "$serif",
    fontSize: "$xl",
    fontWeight: "$light",
    lineHeight: "$relaxed",
  },

  hr: {
    height: 0,
    color: "inherit",
    borderTopWidth: "1px",
  },

  "abbr:where([title])": {
    textDecoration: "underline dotted",
  },

  "h1, h2, h3, h4, h5, h6": {
    fontSize: "inherit",
    fontWeight: "inherit",
  },

  a: {
    // Reset styles
    // color: "inherit",
    textDecoration: "inherit",

    // Theme styles
    color: "$slate12",
    textUnderlineOffset: "6px",
    textDecorationColor: "transparent",
    textDecorationThickness: "1px",

    "&:hover": {
      textUnderlineOffset: "1px",
      textDecorationColor: "$slate12",
    },
  },

  "b, strong": {
    fontWeight: "bolder",
  },

  "code, kbd, samp, pre": {
    fontFamily:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    fontSize: "1em",
  },

  small: {
    fontSize: "80%",
  },

  "sub, sup": {
    fontSize: "75%",
    lineHeight: 0,
    position: "relative",
    verticalAlign: "baseline",
  },

  sub: {
    bottom: "-0.25em",
  },

  sup: {
    top: "-0.5em",
  },

  table: {
    textIndent: 0,
    borderColor: "inherit",
    borderCollapse: "collapse",
  },

  "button, input, optgroup, select, textarea": {
    fontFamily: "inherit",
    fontSize: "100%",
    lineHeight: "inherit",
    color: "inherit",
    margin: 0,
    padding: 0,
  },

  "button, select": {
    textTransform: "none",
  },

  "button, [type='button'], [type='reset'], [type='submit']": {
    appearance: "button",
    backgroundColor: "transparent",
    backgroundImage: "none",
  },

  ":-moz-focusring": {
    outline: "auto",
  },

  ":-moz-ui-invalid": {
    boxShadow: "none",
  },

  progress: {
    verticalAlign: "baseline",
  },

  "::-webkit-inner-spin-button, ::-webkit-outer-spin-button": {
    height: "auto",
  },

  "[type='search']": {
    appearance: "textfield",
    outlineOffset: "-2px",
  },

  "::-webkit-search-decoration": {
    appearance: "none",
  },

  "::-webkit-file-upload-button": {
    appearance: "button",
    font: "inherit",
  },

  summary: {
    display: "list-item",
  },

  "blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre": {
    margin: 0,
  },

  fieldset: {
    margin: 0,
    padding: 0,
  },

  legend: {
    padding: "0",
  },

  "ol, ul, menu": {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },

  textarea: {
    resize: "vertical",
  },

  "input::placeholder, textarea::placeholder": {
    opacity: 1,
    color: "#9ca3af",
  },

  'button, [role="button"]': {
    cursor: "pointer",
  },

  ":disabled": {
    cursor: "default",
  },

  "img, svg, video, canvas, audio, iframe, embed, object": {
    display: "block",
    verticalAlign: "middle",
  },

  "img, video": {
    maxWidth: "100%",
    height: "auto",
  },

  "[hidden]": {
    display: "none",
  },

  // Theme styles
  "*": {
    fontVariationSettings: '"WONK" 1,"SOFT" 100',
  },

  "h1, h2": {
    color: "$slate12",
  },
  h1: {
    fontSize: "$6xl",
  },
  h2: {
    fontSize: "$3xl",
  },
});
