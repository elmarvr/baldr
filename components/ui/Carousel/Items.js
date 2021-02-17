import "twin.macro";
import { Children, useEffect } from "react";
import { animated, useTransition } from "react-spring";
import useMeasure from "react-use-measure";
import { useDrag } from "react-use-gesture";

import useInterval from "../../../hooks/useInterval";
import useCarouselContext from "./useCarouselContext";

const Items = ({ config, children, ...props }) => {
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
    },
    enter: {
      x: 0,
    },
    leave: {
      x: direction.current > 0 ? -width : width,
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
        <animated.span
          style={style}
          css={{
            position: "absolute",
            "&:hover": {
              cursor: pageCount.current > 1 && "grab",
            },
            "&:active": {
              cursor: pageCount.current > 1 && "grabbing",
            },
          }}
          ref={ref}
          {...bind()}
        >
          {Children.toArray(children)[item]}
        </animated.span>
      ))}
    </div>
  );
};

export default Items;
