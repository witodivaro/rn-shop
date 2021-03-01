export const changeProduct = (products, changedProduct) => {
  return {
    ...products,
    [changedProduct.id]: {
      ...products[changedProduct.id],
      ...changedProduct,
    },
  };
};

export const deleteProduct = (products, productToDeleteId) => {
  const copiedProducts = Object.assign({}, products);

  delete copiedProducts[productToDeleteId];

  return copiedProducts;
};
