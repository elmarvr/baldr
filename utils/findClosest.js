import { reduce, indexOf } from "lodash";

export const findClosest = (array, value) => {
  return reduce(array, (result, next) => {
    return Math.abs(result - value) > Math.abs(next - value) ? next : result;
  });
};

export const findClosestIndex = (array, value) => {
  const closest = findClosest(array, value);
  console.log(closest);
  return indexOf(array, closest);
};
