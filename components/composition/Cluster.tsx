import React from "react";
import { styled } from "../../stitches.config";

const Cluster: React.FC<React.HTMLProps<HTMLUListElement>> = ({
  children,
  ...props
}) => {
  return (
    <ul {...props}>
      {React.Children.map(children, (child, index) => {
        return <li key={index}>{child}</li>;
      })}
    </ul>
  );
};

const StyledCluster = styled(Cluster, {
  display: "flex",
  margin: 0,
  padding: 0,
  gap: "10px",

  "& li": {
    listStyle: "none",
  },
});

export default StyledCluster;
