import { useRef, useState } from "react";
import useCarouselContext, { CarouselContext } from "./useCarouselContext";
import Items from "./Items";

const Carousel = ({ autoplay = true, time = 5000, children, ...props }) => {
  const direction = useRef(0);
  const pageCount = useRef(0);
  const [page, set] = useState(0);
  const [idle, setIdle] = useState(true);

  const paginate = (goto) => {
    if (idle) {
      set((prev) => {
        if (goto < 0) {
          direction.current = -1;
          return pageCount.current - 1;
        }
        if (goto >= pageCount.current) {
          direction.current = 1;
          return 0;
        }

        direction.current = prev > goto ? -1 : 1;
        return goto;
      });
    }
  };

  const next = () => {
    if (idle) {
      direction.current = 1;

      set((prev) => {
        if (prev + 1 >= pageCount.current) {
          return 0;
        }
        return prev + 1;
      });
    }
  };

  const previous = () => {
    if (idle) {
      direction.current = -1;
      set((prev) => {
        if (prev - 1 < 0) {
          return pageCount.current - 1;
        }
        return prev - 1;
      });
    }
  };

  const context = {
    paginate,
    next,
    previous,
    direction,
    page,
    time,
    autoplay,
    idle,
    setIdle,
    pageCount,
  };

  return (
    <div {...props}>
      <CarouselContext.Provider value={context}>
        {children}
      </CarouselContext.Provider>
    </div>
  );
};

export { useCarouselContext as useCarousel };

Carousel.Items = Items;

export default Carousel;
