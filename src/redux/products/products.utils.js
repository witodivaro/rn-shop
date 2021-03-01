export const changeProduct = (products, changedProduct) => {
  return {
    ...products,
    [changedProduct.id]: {
      ...products[changedProduct.id],
      ...changedProduct,
    },
  };
};
