import { createContext, useContext } from "react";

export const CarouselContext = createContext({});

const useCarouselContext = () => {
  const context = useContext(CarouselContext);
  if (!context) {
    throw "Don't place Carousel Items outside of Carousel";
  }
  return context;
};

export default useCarouselContext;
