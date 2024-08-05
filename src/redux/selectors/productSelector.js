export const singleProductSelector = (state, productId) => {
  return state.products.products.find((product) => product.id === productId);
};
