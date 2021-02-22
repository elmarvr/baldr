import "twin.macro";
import PropTypes from "prop-types";
import { getStrapiMedia } from "@/lib/api";

const Image = ({ image, ...props }) => {
  return (
    <img
      draggable={false}
      src={getStrapiMedia(image)}
      tw="object-cover object-center"
      {...props}
      alt={image?.alternativeText}
    />
  );
};

export const imagePropTypes = {
  image: PropTypes.shape({
    url: PropTypes.string,
    alternativeText: PropTypes.string,
  }),
};

Image.propTypes = imagePropTypes;

export default Image;
