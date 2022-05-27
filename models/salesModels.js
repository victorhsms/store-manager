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

const getById = (id) => connection.execute(`
  SELECT
    sales.date AS date,
    salesProducts.product_id AS productId,
    salesProducts.quantity AS quantity
  FROM
    StoreManager.sales_products AS salesProducts  
  INNER JOIN StoreManager.sales AS sales
    ON salesProducts.sale_id = sales.id
  WHERE salesProducts.sale_id = ?;
`, [id]);

const newSale = async () => {
  const [result] = await connection.execute(`
   INSERT INTO StoreManager.sales (date) VALUES (NOW());
 `);

  return result.insertId;
};

const postSale = (id, productId, quantity) => connection.execute(`
  INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?);
`, [id, productId, quantity]);

const putSale = (id, productId, quantity) => connection.execute(
    'UPDATE StoreManager.sales_products SET quantity=? WHERE product_id=? AND sale_id=?;',
    [quantity, productId, id],
);

module.exports = {
  getAll,
  getById,
  newSale,
  postSale,
  putSale,
};