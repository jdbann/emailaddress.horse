import React from "react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { getCssText, styled } from "../stitches.config";

const StyledBody = styled("body", {
  backgroundColor: "$blue1",
});

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <StyledBody>
          <Main />
          <NextScript />
        </StyledBody>
      </Html>
    );
  }
}
