import { useSpring } from "react-spring";

const useBounce = () => {
  const { y, scaleX, scaleY } = useSpring({
    from: {
      y: 0,
      scaleY: 1,
      scaleX: 1,
    },

    to: async (animate) => {
      await animate({ scaleY: 0.9, scaleX: 1.05, config: { duration: 200 } });
      await animate({ scaleY: 1, scaleX: 1, config: { duration: 300 } });
      await animate({
        scaleY: 1.1,
        scaleX: 0.95,
        y: -50,
        config: { clamp: true },
      });
      await animate({
        scaleY: 1,
        scaleX: 1,
        y: 0,
        config: { bounce: 0.7, clamp: false },
      });
    },
    config: {
      mass: 3,
      tension: 180,
      friction: 12,
    },
    delay: 1000,
    loop: true,
  });

  return {
    scaleX,
    scaleY,
    y,
  };
};

export default useBounce;
