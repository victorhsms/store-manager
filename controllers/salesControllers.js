const salesServices = require('../services/salesServices');
const messages = require('../mocks/messages');

const getAllSales = async (req, res) => {
  try {
    const [rows] = await salesServices.getAll();
    return res.status(200).json(rows);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: messages[500] });
  }
};

const getSale = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await salesServices.getAll(id);
    if (rows.length === 0) return res.status(404).json({ message: 'Sale not found' });
    return res.status(200).json(rows);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: messages[500] });
  }
};

const postSale = async (req, res) => {
  try {
    const sales = req.body;
  
    const response = await salesServices.postSales(sales);
    return res.status(201).json(response);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: messages[500] });
  }
};

const putSale = async (req, res) => {
  try {
    const { productId, quantity } = req.body[0];
    const { id } = req.params;

    const result = await salesServices.putSale(id, productId, quantity);
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: messages[500] });
  }
};

module.exports = {
  getSale,
  getAllSales,
  postSale,
  putSale,
};