import Image from "next/image";
import invariant from "tiny-invariant";

type ResponsiveImageProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

const ResponsiveImage = ({ src, alt, height, width }: ResponsiveImageProps) => {
  invariant(src, "src is required");

  const imageProps = {
    src,
    alt,
    height,
    width,
  };
  return <Image layout="responsive" {...imageProps} />;
};

export default ResponsiveImage;
