const salesModels = require('../models/salesModels');

const getAll = (id = null) => {
  if (id) return salesModels.getById(id);
  return salesModels.getAll();
};

const postSales = async (sales) => {
  // Registrando uma nova venda e gerando um id
  const id = await salesModels.newSale();

  // Promise.all referencia: https://oieduardorabelo.medium.com/javascript-armadilhas-do-asyn-await-em-loops-1cdad44db7f0
  // Adcionando produtos e quantidades da nova venda
  const promises = sales.map(async (sale) => {
    const { productId, quantity } = sale;
    await salesModels.postSale(id, productId, quantity);
  });

  await Promise.all(promises);

  // Retornando resposta padronizada
  const result = {
    id,
    itemsSold: sales,
  };

  return result;
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
  postSales,
  putSale,
};