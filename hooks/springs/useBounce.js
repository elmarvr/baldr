import { useSpring } from "react-spring";

import useInterval from "@/hooks/useInterval";

const useBounce = (delay = 5000) => {
  const [{ y, scaleX, scaleY }, animate] = useSpring(() => ({
    from: {
      y: 0,
      scaleY: 1,
      scaleX: 1,
    },
    config: {
      mass: 3,
      tension: 180,
      friction: 12,
    },
  }));

  const { start, stop } = useInterval(async () => {
    await animate({ scaleY: 0.9, scaleX: 1.05, config: { duration: 200 } });
    await animate({ scaleY: 1, scaleX: 1, config: { duration: 300 } });
    await animate({
      scaleY: 1.1,
      scaleX: 0.95,
      y: -80,
      config: { clamp: true },
    });
    await animate({
      scaleY: 1,
      scaleX: 1,
      y: 0,
      config: { bounce: 0.7, clamp: false },
    });
  }, delay);

  return {
    style: {
      y,
      scaleX,
      scaleY,
    },
    start: async () => {
      await animate({
        y: 0,
        config: {
          bounce: 0.7,
          clamp: false,
        },
      });
      start();
    },
    stop: async () => {
      stop();
      await animate({ cancel: true });
      await animate({
        y: y.get(),
        scaleY: 1,
        scaleX: 1,
        config: {
          duration: 200,
        },
      });
    },
  };
};

export default useBounce;
