import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { styled } from "../stitches.config";
import Cluster from "./composition/Cluster";

const Root: React.FC<React.HTMLProps<HTMLElement>> = ({
  children,
  ...props
}) => {
  return (
    <nav {...props}>
      <Cluster asList>{children}</Cluster>
    </nav>
  );
};

const StyledRoot = styled(Root, {});

const StyledLink = styled("a", {
  color: "$slate11",
  fontWeight: "$light",
  fontSize: "$xl",
  letterSpacing: ".025em",
  lineHeight: "$normal",

  "&:hover": {
    color: "$slate12",
  },

  variants: {
    active: {
      true: {
        color: "$slate12",
      },
    },
  },
});

const isPathDescendant = (
  pathToCheck: string,
  pathToMatch: string
): boolean => {
  switch (pathToCheck) {
    case "/":
      return pathToCheck === pathToMatch;
    default:
      return pathToMatch.startsWith(pathToCheck);
  }
};

type LinkProps = {
  className?: string;
  href: string;
};

const Link: React.FC<LinkProps> = ({ href, children }) => {
  const router = useRouter();

  return (
    <NextLink href={href} passHref>
      <StyledLink active={isPathDescendant(href, router.asPath)}>
        {children}
      </StyledLink>
    </NextLink>
  );
};

export { Root, Link };
