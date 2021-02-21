import "twin.macro";
import { useState, useRef, useEffect, Children } from "react";
import PropTypes from "prop-types";
import { useGesture } from "react-use-gesture";
import { animated } from "react-spring";
import { first, last, findIndex, take, map, property, nth } from "lodash";

import { findClosest } from "@/utils/findClosest";
import useSlider from "./useSlider";

const Items = ({ children, ...props }) => {
  const {
    registerItem,
    items,
    gotoPage,
    itemsInView,
    x,
    animate,
  } = useSlider();
  const debounce = useRef(null);

  const [state, set] = useState({
    viewWidth: 0,
    viewHeight: 0,
    direction: 0,
  });

  const bind = useGesture(
    {
      onDrag: ({ movement: [mx], direction: [dx] }) => {
        if (dx !== 0) {
          clearTimeout(debounce.current);
          set((prev) => ({ ...prev, direction: dx }));
        } else {
          // mouse is idle return to closest instead of next / prev
          debounce.current = setTimeout(() => {
            set((prev) => ({ ...prev, direction: 0 }));
          }, 1000);
        }

        animate({ x: mx });
      },
      onDragEnd: () => {
        const gx = getGridX();
        updatePage(gx);
        animate({ x: -gx });
      },
    },
    {
      drag: {
        axis: "x",
        initial: () => [x.get(), 0],
        bounds: () => {
          const leftBound = nth(items, -itemsInView).x;
          return {
            left: -leftBound,
            right: 0,
          };
        },
        rubberband: true,
      },
    }
  );

  const getGridCellsWidth = (count) => {
    if (items.length > count) {
      const cells = take(items, count);

      return last(cells).x + last(cells).width - first(cells).x;
    }
    return 0;
  };

  const updatePage = (x) => {
    const index = findIndex(items, ["x", x]);

    if (index === items.length - itemsInView) {
      return gotoPage(Math.ceil(index / itemsInView));
    }

    return gotoPage(Math.floor(index / itemsInView));
  };

  const getGridX = () => {
    // last item always snaps to last cell
    if (-x.get() > getGridCellsWidth(items.length - itemsInView)) {
      return nth(items, -itemsInView).x;
    }

    const xs = map(items, property("x"));
    return findClosest(
      xs,
      -x.get() - state.direction * getGridCellsWidth(1) * 0.6
    );
  };

  useEffect(() => {
    set((prev) => {
      const viewWidth = getGridCellsWidth(itemsInView);
      const viewHeight = items[0].height;
      return { ...prev, viewWidth, viewHeight };
    });
  }, [itemsInView]);

  // Outside layer to slider

  return (
    <div
      css={{
        position: "relative",
        overflow: "hidden",
        width: state.viewWidth,
        height: state.viewHeight,
        "&:hover": {
          cursor: "grab",
        },
        "&:active": {
          cursor: "grabbing",
        },
      }}
    >
      <animated.div
        {...bind()}
        css={{
          position: "absolute",
          display: "flex",
        }}
        style={{
          x,
        }}
        {...props}
      >
        {Children.map(children, (child, index) => (
          <span
            css={{ flexShrink: 0 }}
            ref={registerItem}
            key={`slider-item-${index}`}
          >
            {child}
          </span>
        ))}
      </animated.div>
    </div>
  );
};

Items.propTypes = {
  children: PropTypes.node,
};

export default Items;
