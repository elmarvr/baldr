import { createContext, useContext } from "react";

export const SliderContext = createContext({});

const useSlider = () => {
  const context = useContext(SliderContext);
  if (!context) {
    throw "Don't place Items outside of Slider";
  }
  return context;
};

export default useSlider;
