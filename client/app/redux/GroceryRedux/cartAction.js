export const addToCart = (item) => ({
  type: "ADD_TO_CART",
  payload: {
    id: item,
  },
});
