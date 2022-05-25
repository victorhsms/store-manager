const productsModels = require('../models/productsModels');

const getAll = (id = null) => {
  if (id) return productsModels.getById(id);
  return productsModels.getAll();
};

module.exports = {
  getAll,
};