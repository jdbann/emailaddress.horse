import { MDXRemote } from "next-mdx-remote";
import ResponsiveImage from "./ResponsiveImage";

type MarkdownProps = {
  compiledSource: string;
};

const Markdown = ({ compiledSource }: MarkdownProps): JSX.Element => {
  return (
    <MDXRemote
      compiledSource={compiledSource}
      components={{ img: ResponsiveImage }}
    />
  );
};

export default Markdown;
