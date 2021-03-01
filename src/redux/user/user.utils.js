export const identifyOrder = (order) => ({
  ...order,
  id: new Date().getTime().toString(),
});
