import "twin.macro";
import { getStrapiMedia } from "../../lib/api";

const Image = ({ image, ...props }) => {
  const src = getStrapiMedia(image);

  return (
    <img
      draggable={false}
      src={src}
      tw="object-cover object-center"
      {...props}
      alt={image?.alternativeText}
    />
  );
};

export default Image;
