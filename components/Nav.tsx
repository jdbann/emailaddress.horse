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
      <Cluster children={children} />
    </nav>
  );
};

const StyledRoot = styled(Root, {});

type LinkProps = {
  href: string;
};

const Link: React.FC<LinkProps> = ({ href, children }) => {
  return (
    <NextLink href={href}>
      <a>{children}</a>
    </NextLink>
  );
};

const StyledLink = styled(Link, {});

export default { Root: StyledRoot, Link: StyledLink };
