const productsModels = require('../models/productsModels');

const getAll = (id = null) => {
  if (id) return productsModels.getById(id);
  return productsModels.getAll();
};

const postProduct = async (name, quantity) => {
  // vendo se ja possui um item parecido na lista
  const [allItems] = await productsModels.getAll();
  const findItem = allItems.find((item) => item.name === name);
  if (findItem) return undefined;

  // Caso não seja produto repetido
  const id = await productsModels.postProduct(name, quantity);
  return { id, name, quantity };
};

module.exports = {
  getAll,
  postProduct,
};