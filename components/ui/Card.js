import "twin.macro";
import PropTypes from "prop-types";
import Image from "./Image";

const Card = ({ children, ...props }) => {
  return (
    <div tw="flex flex-col items-center relative" {...props}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
};

Card.Image = Image;

export default Card;
