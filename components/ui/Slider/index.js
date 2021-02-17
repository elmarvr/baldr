import { useCallback, useState, useRef, useEffect } from "react";
import { useSpring } from "react-spring";
import { isFunction, clamp } from "lodash";

import Items from "./items";
import { SliderContext } from "./useSlider";

const Slider = ({ children, itemsInView = 3, ...props }) => {
  const items = useRef([]);
  const [state, set] = useState({
    pages: 0,
    page: 0,
  });

  const [{ x }, animate] = useSpring(() => ({
    x: 0,
    config: {
      tension: 300,
      friction: 30,
    },
  }));

  useEffect(() => {
    set((prev) => ({
      ...prev,
      pages: Math.ceil(items.current.length / itemsInView),
    }));
  }, []);

  const gotoPage = (page) => {
    set((prev) => ({ ...prev, page: clamp(page, 0, state.pages) }));
  };

  const paginate = (page) => {
    gotoPage(page);
    const index = clamp(
      page * itemsInView,
      0,
      items.current.length - itemsInView
    );
    animate({ x: -items.current[index].x });
  };

  const registerItem = useCallback((node) => {
    if (node) {
      const { width, height } = node.getBoundingClientRect();
      const x = node.offsetLeft;
      items.current.push({ width, x, height });
    }
  }, []);

  const context = {
    items: items.current,
    registerItem,
    itemsInView,
    gotoPage,
    x,
    animate,
  };

  return (
    <div {...props}>
      <SliderContext.Provider value={context}>
        {isFunction(children)
          ? children({ page: state.page, pages: state.pages, paginate })
          : children}
      </SliderContext.Provider>
    </div>
  );
};

Slider.Items = Items;

export default Slider;
