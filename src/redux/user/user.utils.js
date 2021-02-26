export const identifyOrder = (order) => ({...order, id: new Date().toString()});
