const getMarginWidth = (node) => {
  if (node) {
    const { marginLeft, marginRight } = window.getComputedStyle(node);

    return node.clientWidth + parseFloat(marginLeft) + parseFloat(marginRight);
  }
  return 0;
};

const getMarginHeight = (node) => {
  if (node) {
    const { marginTop, marginBottom } = window.getComputedStyle(node);

    return node.clientHeight + parseFloat(marginTop) + parseFloat(marginBottom);
  }
  return 0;
};

const getMarginBounds = (node) => {
  return {
    width: getMarginWidth(node),
    height: getMarginHeight(node),
  };
};

export default getMarginBounds;
