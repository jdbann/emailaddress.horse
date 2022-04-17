import { styled } from "../stitches.config";

const round = (num: number) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");
const rem = (px: number) => `${round(px / 16)}rem`;
const em = (px: number, base: number) => `${round(px / base)}em`;

const Prose = styled("div", {
  color: "var(--prose-body)",
  maxWidth: "65ch",
  '& [class~="lead"]': {
    color: "var(--prose-lead)",
  },
  a: {
    color: "var(--prose-links)",
    textDecoration: "underline",
    fontWeight: "500",
  },
  strong: {
    color: "var(--prose-bold)",
    fontWeight: "600",
  },
  ol: {
    listStyleType: "decimal",
  },
  'ol[type="A"]': {
    listStyleType: "upper-alpha",
  },
  'ol[type="a"]': {
    listStyleType: "lower-alpha",
  },
  'ol[type="A" s]': {
    listStyleType: "upper-alpha",
  },
  'ol[type="a" s]': {
    listStyleType: "lower-alpha",
  },
  'ol[type="I"]': {
    listStyleType: "upper-roman",
  },
  'ol[type="i"]': {
    listStyleType: "lower-roman",
  },
  'ol[type="I" s]': {
    listStyleType: "upper-roman",
  },
  'ol[type="i" s]': {
    listStyleType: "lower-roman",
  },
  'ol[type="1"]': {
    listStyleType: "decimal",
  },
  ul: {
    listStyleType: "disc",
  },
  "ol > li::marker": {
    fontWeight: "400",
    color: "var(--prose-counters)",
  },
  "ul > li::marker": {
    color: "var(--prose-bullets)",
  },
  hr: {
    borderColor: "var(--prose-hr)",
    borderTopWidth: 1,
  },
  blockquote: {
    fontWeight: "500",
    fontStyle: "italic",
    color: "var(--prose-quotes)",
    borderLeftWidth: "0.25rem",
    borderLeftColor: "var(--prose-quote-borders)",
    quotes: '"\\201C""\\201D""\\2018""\\2019"',
  },
  "blockquote p:first-of-type::before": {
    content: "open-quote",
  },
  "blockquote p:last-of-type::after": {
    content: "close-quote",
  },
  h1: {
    color: "var(--prose-headings)",
    fontWeight: "800",
  },
  "h1 strong": {
    fontWeight: "900",
  },
  h2: {
    color: "var(--prose-headings)",
    fontWeight: "700",
  },
  "h2 strong": {
    fontWeight: "800",
  },
  h3: {
    color: "var(--prose-headings)",
    fontWeight: "600",
  },
  "h3 strong": {
    fontWeight: "700",
  },
  h4: {
    color: "var(--prose-headings)",
    fontWeight: "600",
  },
  "h4 strong": {
    fontWeight: "700",
  },
  figcaption: {
    color: "var(--prose-captions)",
  },
  code: {
    color: "var(--prose-code)",
    fontWeight: "600",
  },
  "code::before": {
    content: '"`"',
  },
  "code::after": {
    content: '"`"',
  },
  "a code": {
    color: "var(--prose-links)",
  },
  pre: {
    color: "var(--prose-pre-code)",
    backgroundColor: "var(--prose-pre-bg)",
    overflowX: "auto",
    fontWeight: "400",
  },
  "pre code": {
    backgroundColor: "transparent",
    borderWidth: "0",
    borderRadius: "0",
    padding: "0",
    fontWeight: "inherit",
    color: "inherit",
    fontSize: "inherit",
    fontFamily: "inherit",
    lineHeight: "inherit",
  },
  "pre code::before": {
    content: "none",
  },
  "pre code::after": {
    content: "none",
  },
  table: {
    width: "100%",
    tableLayout: "auto",
    textAlign: "left",
    marginTop: "2em",
    marginBottom: "2em",
  },
  thead: {
    borderBottomWidth: "1px",
    borderBottomColor: "var(--prose-th-borders)",
  },
  "thead th": {
    color: "var(--prose-headings)",
    fontWeight: "600",
    verticalAlign: "bottom",
  },
  "tbody tr": {
    borderBottomWidth: "1px",
    borderBottomColor: "var(--prose-td-borders)",
  },
  "tbody tr:last-child": {
    borderBottomWidth: "0",
  },
  "tbody td": {
    verticalAlign: "baseline",
  },
  tfoot: {
    borderTopWidth: "1px",
    borderTopColor: "var(--prose-th-borders)",
  },
  "tfoot td": {
    verticalAlign: "top",
  },

  variants: {
    size: {
      base: {
        fontSize: rem(16),
        lineHeight: round(28 / 16),
        p: {
          marginTop: em(20, 16),
          marginBottom: em(20, 16),
        },
        '[class~="lead"]': {
          fontSize: em(20, 16),
          lineHeight: round(32 / 20),
          marginTop: em(24, 20),
          marginBottom: em(24, 20),
        },
        blockquote: {
          marginTop: em(32, 20),
          marginBottom: em(32, 20),
          paddingLeft: em(20, 20),
        },
        h1: {
          fontSize: em(36, 16),
          marginTop: "0",
          marginBottom: em(32, 36),
          lineHeight: round(40 / 36),
        },
        h2: {
          fontSize: em(24, 16),
          marginTop: em(48, 24),
          marginBottom: em(24, 24),
          lineHeight: round(32 / 24),
        },
        h3: {
          fontSize: em(20, 16),
          marginTop: em(32, 20),
          marginBottom: em(12, 20),
          lineHeight: round(32 / 20),
        },
        h4: {
          marginTop: em(24, 16),
          marginBottom: em(8, 16),
          lineHeight: round(24 / 16),
        },
        img: {
          marginTop: em(32, 16),
          marginBottom: em(32, 16),
        },
        video: {
          marginTop: em(32, 16),
          marginBottom: em(32, 16),
        },
        figure: {
          marginTop: em(32, 16),
          marginBottom: em(32, 16),
        },
        "figure > *": {
          marginTop: "0",
          marginBottom: "0",
        },
        figcaption: {
          fontSize: em(14, 16),
          lineHeight: round(20 / 14),
          marginTop: em(12, 14),
        },
        code: {
          fontSize: em(14, 16),
        },
        "h2 code": {
          fontSize: em(21, 24),
        },
        "h3 code": {
          fontSize: em(18, 20),
        },
        pre: {
          fontSize: em(14, 16),
          lineHeight: round(24 / 14),
          marginTop: em(24, 14),
          marginBottom: em(24, 14),
          borderRadius: rem(6),
          paddingTop: em(12, 14),
          paddingRight: em(16, 14),
          paddingBottom: em(12, 14),
          paddingLeft: em(16, 14),
        },
        ol: {
          marginTop: em(20, 16),
          marginBottom: em(20, 16),
          paddingLeft: em(26, 16),
        },
        ul: {
          marginTop: em(20, 16),
          marginBottom: em(20, 16),
          paddingLeft: em(26, 16),
        },
        li: {
          marginTop: em(8, 16),
          marginBottom: em(8, 16),
        },
        "ol > li": {
          paddingLeft: em(6, 16),
        },
        "ul > li": {
          paddingLeft: em(6, 16),
        },
        "> ul > li p": {
          marginTop: em(12, 16),
          marginBottom: em(12, 16),
        },
        "> ul > li > *:first-child": {
          marginTop: em(20, 16),
        },
        "> ul > li > *:last-child": {
          marginBottom: em(20, 16),
        },
        "> ol > li > *:first-child": {
          marginTop: em(20, 16),
        },
        "> ol > li > *:last-child": {
          marginBottom: em(20, 16),
        },
        "ul ul, ul ol, ol ul, ol ol": {
          marginTop: em(12, 16),
          marginBottom: em(12, 16),
        },
        hr: {
          marginTop: em(48, 16),
          marginBottom: em(48, 16),
        },
        "hr + *": {
          marginTop: "0",
        },
        "h2 + *": {
          marginTop: "0",
        },
        "h3 + *": {
          marginTop: "0",
        },
        "h4 + *": {
          marginTop: "0",
        },
        table: {
          fontSize: em(14, 16),
          lineHeight: round(24 / 14),
        },
        "thead th": {
          paddingRight: em(8, 14),
          paddingBottom: em(8, 14),
          paddingLeft: em(8, 14),
        },
        "thead th:first-child": {
          paddingLeft: "0",
        },
        "thead th:last-child": {
          paddingRight: "0",
        },
        "tbody td, tfoot td": {
          paddingTop: em(8, 14),
          paddingRight: em(8, 14),
          paddingBottom: em(8, 14),
          paddingLeft: em(8, 14),
        },
        "tbody td:first-child, tfoot td:first-child": {
          paddingLeft: "0",
        },
        "tbody td:last-child, tfoot td:last-child": {
          paddingRight: "0",
        },
        "> :first-child": {
          marginTop: "0",
        },
        "> :last-child": {
          marginBottom: "0",
        },
      },
    },

    color: {
      blue: {
        "--prose-body": "$colors$blue11",
        "--prose-headings": "$colors$blue12",
        "--prose-lead": "$colors$blue11",
        "--prose-links": "$colors$blue12",
        "--prose-bold": "$colors$blue12",
        "--prose-counters": "$colors$blue9",
        "--prose-bullets": "$colors$blue9",
        "--prose-hr": "$colors$blue6",
        "--prose-quotes": "$colors$blue12",
        "--prose-quote-borders": "$colors$blue6",
        "--prose-captions": "$colors$blue9",
        "--prose-code": "$colors$blue12",
        "--prose-pre-code": "$colors$blue11",
        "--prose-pre-bg": "$colors$blue3",
        "--prose-th-borders": "$colors$blue9",
        "--prose-td-borders": "$colors$blue6",
      },
      slate: {
        "--prose-body": "$colors$slate11",
        "--prose-headings": "$colors$slate12",
        "--prose-lead": "$colors$slate11",
        "--prose-links": "$colors$slate12",
        "--prose-bold": "$colors$slate12",
        "--prose-counters": "$colors$slate9",
        "--prose-bullets": "$colors$slate9",
        "--prose-hr": "$colors$slate6",
        "--prose-quotes": "$colors$slate12",
        "--prose-quote-borders": "$colors$slate6",
        "--prose-captions": "$colors$slate9",
        "--prose-code": "$colors$slate12",
        "--prose-pre-code": "$colors$slate11",
        "--prose-pre-bg": "$colors$slate3",
        "--prose-th-borders": "$colors$slate9",
        "--prose-td-borders": "$colors$slate6",
      },
    },
  },

  defaultVariants: {
    size: "base",
    color: "slate",
  },
});

export default Prose;
