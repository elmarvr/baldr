import { createContext, useContext } from "react";

export const SliderContext = createContext({});

const useSlider = () => {
  const context = useContext(SliderContext);
  if (!context) {
    throw new Error("Don't place Items outside of Slider");
  }
  return context;
};

export default useSlider;
