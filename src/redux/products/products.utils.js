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

export const addProduct = (products, productToAdd) => {
  const newProductId = Object.keys(products).length;

  if (!productToAdd.imageUrl) {
    productToAdd.imageUrl = 'https://i.stack.imgur.com/y9DpT.jpg';
  }

  return Object.assign({}, products, {
    [newProductId]: {id: newProductId, ...productToAdd},
  });
};
