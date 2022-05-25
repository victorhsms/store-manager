const connection = require('../db/index');

const getAll = () => connection.execute('SELECT * FROM StoreManager.products');

module.exports = {
  getAll,
};