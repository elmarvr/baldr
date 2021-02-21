import tw from "twin.macro";
import PropTypes from "prop-types";
import chevron from "@iconify/icons-fa-solid/chevron-left";

import GoldIcon from "./GoldIcon";

const Chevron = ({ left, ...props }) => (
  <GoldIcon
    icon={chevron}
    hover
    tw="absolute top-1/2 h-16 w-16 transform! -translate-y-1/2 hover:cursor-pointer z-10"
    css={left ? tw`left-4` : tw`right-4 rotate-180!`}
    {...props}
  />
);

Chevron.propTypes = {
  left: PropTypes.bool,
};

export default Chevron;
