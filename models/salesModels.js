const connection = require('../db/index');

const getAll = () => connection.execute(`
  SELECT 
    salesProducts.sale_id AS saleId,
    sales.date AS date,
    salesProducts.product_id AS productId,
    salesProducts.quantity AS quantity
  FROM
    StoreManager.sales_products AS salesProducts
  INNER JOIN StoreManager.sales AS sales
    ON salesProducts.sale_id = sales.id
  ORDER BY saleId;
`);

module.exports = {
  getAll,
};