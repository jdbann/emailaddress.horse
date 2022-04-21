import Image from "next/image";
import invariant from "tiny-invariant";

type ResponsiveImageProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

const ResponsiveImage = ({
  src,
  alt,
  height,
  width,
  title,
}: ResponsiveImageProps) => {
  invariant(src, "src is required");

  const imageProps = {
    src,
    height,
    width,
  };

  if (title === undefined) {
    return <Image layout="responsive" alt={alt} {...imageProps} />;
  } else {
    return (
      <figure>
        <Image layout="responsive" alt={alt} {...imageProps} />
        <figcaption>{title}</figcaption>
      </figure>
    );
  }
};

export default ResponsiveImage;
