import "twin.macro";
import { Children, useEffect } from "react";
import PropTypes from "prop-types";
import { animated, useTransition } from "react-spring";
import useMeasure from "react-use-measure";
import { useDrag } from "react-use-gesture";

import useInterval from "../../../hooks/useInterval";
import useCarouselContext from "./useCarouselContext";

const Items = ({ config, children, fade, ...props }) => {
  const [ref, { width }] = useMeasure();
  const {
    next,
    paginate,
    direction,
    time,
    page,
    autoplay,
    pageCount,
    idle,
    setIdle,
  } = useCarouselContext();

  const { stop, start } = useInterval(() => {
    autoplay && next();
  }, time);

  const bind = useDrag(
    ({ swipe: [sx] }) => {
      if (sx !== 0 && idle) {
        paginate(page - sx);
      }
    },
    {
      drag: {
        swipeDuration: 500,
        swipeDistance: [0, 0],
        swipeVelocity: [0, 0],
      },
    }
  );

  useEffect(() => {
    pageCount.current = Children.count(children);
  }, []);

  const transition = useTransition(page, {
    from: {
      x: direction.current > 0 ? width : -width,
      opacity: fade ? 0 : 1,
    },
    enter: {
      x: 0,
      opacity: 1,
    },
    leave: {
      x: direction.current > 0 ? -width : width,
      opacity: fade ? 0 : 1,
    },
    onStart: () => {
      stop();
      setIdle(false);
    },
    onRest: () => {
      start();
      setIdle(true);
    },
    config,
  });

  return (
    <div css={{ position: "relative", overflow: "hidden" }} {...props}>
      {transition((style, item) => (
        <animated.div
          style={style}
          css={{
            position: "absolute",
            width: "inherit",
            "&:hover": {
              cursor: pageCount.current > 1 ? "grab" : "auto",
            },
            "&:active": {
              cursor: pageCount.current > 1 ? "grabbing" : "auto",
            },
          }}
          ref={ref}
          {...bind()}
        >
          {Children.toArray(children)[item]}
        </animated.div>
      ))}
    </div>
  );
};

Items.propTypes = {
  config: PropTypes.object,
  children: PropTypes.node,
  fade: PropTypes.bool,
};

export default Items;
