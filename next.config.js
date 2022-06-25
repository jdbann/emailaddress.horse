const withMarkdoc = require("@markdoc/next.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["md", "tsx"],
  reactStrictMode: true,
};

const markdocConfig = {
  mode: "static",
};

module.exports = withMarkdoc(markdocConfig)(nextConfig);
