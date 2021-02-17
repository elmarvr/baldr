const getIntersections = async (items) => {
  const intersections = [];

  await new Promise((resolve) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        intersections.push(entry);
      });
      observer.disconnect();
      resolve();
    });

    items.forEach((item) => observer.observe(item));
  });

  return intersections;
};

export default getIntersections;
