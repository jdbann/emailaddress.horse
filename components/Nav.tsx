import NextLink from "next/link";
import React from "react";
import { styled } from "../stitches.config";
import Cluster from "./composition/Cluster";

const Root: React.FC<React.HTMLProps<HTMLElement>> = ({
  children,
  ...props
}) => {
  return (
    <nav {...props}>
      <Cluster asList children={children} />
    </nav>
  );
};

const StyledRoot = styled(Root, {});

type LinkProps = {
  className?: string;
  href: string;
};

const Link: React.FC<LinkProps> = ({ className, href, children }) => {
  return (
    <NextLink href={href}>
      <a className={className}>{children}</a>
    </NextLink>
  );
};

const StyledLink = styled(Link, {
  color: "$slate11",
  fontWeight: "$light",
  textDecoration: "none",
  fontSize: "$xl",
  letterSpacing: ".025em",
  lineHeight: "$normal",

  "&:hover": {
    color: "$slate12",
  },
});

export default { Root: StyledRoot, Link: StyledLink };
