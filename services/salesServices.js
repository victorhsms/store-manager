const salesModels = require('../models/salesModels');

const getAll = (id = null) => {
  if (id) return salesModels.getById(id);
  return salesModels.getAll();
};

module.exports = {
  getAll,
};