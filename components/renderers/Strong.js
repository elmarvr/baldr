import "twin.macro";
import { useState } from "react";
import { animated, useTransition } from "react-spring";

const Strong = ({ children }) => {
  const [hover, set] = useState(false);

  const transition = useTransition(hover, {
    from: {
      y: 5,
      opacity: 0,
    },
    enter: {
      y: -20,
      opacity: 1,
      onRest: () => {
        set(false);
      },
    },
    leave: {
      opacity: 0,
    },
    config: {
      friction: 16,
    },
  });

  return (
    <strong
      tw="inline-block relative font-bold text-red-900!"
      onMouseEnter={() => set(true)}
    >
      {children}
      {transition(
        (style, hover) =>
          hover && (
            <animated.span
              tw="text-2xl absolute text-shadow left-1/2 transform whitespace-nowrap"
              style={{ ...style, x: "-50%" }}
            >
              ✌️😲
            </animated.span>
          )
      )}
    </strong>
  );
};

export default Strong;
