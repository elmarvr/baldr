import "twin.macro";
import { forwardRef } from "react";
import PropTypes from "prop-types";
import { useSpring, animated } from "react-spring";
import { Icon } from "@iconify/react";

const Stat = forwardRef(({ icon, naam, aantal }, ref) => {
  const { number, opacity, y } = useSpring({
    from: {
      y: 20,
      opacity: 0,
      number: 0,
    },
    number: aantal,
    opacity: 1,
    y: 0,
    config: {
      mass: 3,
      friction: 30,
      tension: 150,
      clamp: true,
    },
    ref,
  });

  return (
    <div tw="flex flex-col items-center flex-grow text-white">
      <Icon icon={icon} tw="text-4xl mb-4" />
      <div tw="mb-10 font-semibold text-sm">{naam}</div>
      <animated.span style={{ opacity, y }} tw="font-bold text-4xl">
        {number.to(Math.round)}
      </animated.span>
    </div>
  );
});

Stat.propTypes = {
  icon: PropTypes.shape({
    body: PropTypes.string,
  }),
  naam: PropTypes.string,
  aantal: PropTypes.number,
};

export default Stat;
