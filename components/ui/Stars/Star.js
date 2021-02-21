import "twin.macro";
import PropTypes from "prop-types";
import starHalf from "@iconify/icons-la/star-half-alt";
import starFull from "@iconify/icons-la/star-solid";
import starEmpty from "@iconify/icons-la/star";
import GoldIcon from "../GoldIcon";

const Star = ({ value, ...props }) => {
  const icons = {
    0: starEmpty,
    0.5: starHalf,
    1: starFull,
  };

  return <GoldIcon width="100%" height="100%" icon={icons[value]} {...props} />;
};

Star.propTypes = {
  value: PropTypes.oneOf([0, 0.5, 1]),
};

export default Star;
