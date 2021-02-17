import { useEffect, useRef } from "react";

const useInterval = (handler, time = 1000) => {
  const interval = useRef(null);

  useEffect(() => {
    start();

    return stop;
  }, []);

  const stop = () => {
    clearInterval(interval.current);
    interval.current = null;
  };

  const start = () => {
    if (interval.current === null) {
      interval.current = setInterval(handler, time);
    }
  };

  const reset = () => {
    stop();
    start();
  };

  return {
    start,
    stop,
    reset,
  };
};

export default useInterval;
