import React from "react";
import { styled } from "../../stitches.config";

type ClusterProps = {
  asList?: boolean;
  className?: string;
};

const Cluster: React.FC<ClusterProps> = ({
  asList = false,
  children,
  className,
}) => {
  if (asList) {
    return (
      <ul className={className}>
        {React.Children.map(children, (child, index) => {
          return <li key={index}>{child}</li>;
        })}
      </ul>
    );
  } else {
    return <div className={className}>{children}</div>;
  }
};

export default styled(Cluster, {
  display: "flex",
  margin: "$0",
  padding: "$0",
  gap: "$4",

  "& li": {
    listStyle: "none",
  },

  variants: {
    direction: {
      column: {
        flexDirection: "column",
      },
    },
  },
});
