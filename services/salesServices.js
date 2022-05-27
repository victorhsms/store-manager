const salesModels = require('../models/salesModels');

const getAll = (id = null) => {
  if (id) return salesModels.getById(id);
  return salesModels.getAll();
};

const putSale = async (id, productId, quantity) => {
  await salesModels.putSale(id, productId, quantity);

  const objectReturned = {
    saleId: id,
    itemUpdated: [
      {
        productId,
        quantity,
      },
    ],
  };

  return objectReturned;
};

module.exports = {
  getAll,
  putSale,
};