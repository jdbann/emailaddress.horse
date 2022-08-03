import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Root: React.FC<React.HTMLProps<HTMLElement>> = ({
  children,
  ...props
}) => {
  return (
    <nav {...props}>
      <ul className="flex flex-row gap-4" role="list">
        {React.Children.map(children, (child, index) => {
          return <li key={index}>{child}</li>;
        })}
      </ul>
    </nav>
  );
};

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
      <a className="text-slate-11 font-light text-xl tracking-wide leading-normal hover:text-slate-12 [&[data-active='true']]:text-slate-12" data-active={isPathDescendant(href, router.asPath)}>
        {children}
      </a>
    </NextLink>
  );
};

export { Root, Link };
