const productsServices = require('../services/productsServices');
const messages = require('../mocks/messages');

const getAllProducts = async (req, res) => {
  try {
    const [rows] = await productsServices.getAll();
    return res.status(200).json(rows);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: messages[500] });
}
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await productsServices.getAll(id);
    if (rows.length === 0) res.status(404).json({ message: 'Product not found' });
    return res.status(200).json(rows[0]);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: messages[500] });
  }
};

const postProduct = async (req, res) => {
  try {
    const { name, quantity } = req.body;

    const result = await productsServices.postProduct(name, quantity);
    if (!result) return res.status(409).json({ message: 'Product already exists' });
    return res.status(201).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: messages[500] });
  }
};

const putProduct = async (req, res) => {
  try {
    const { name, quantity } = req.body;
    const { id } = req.params;

    const result = await productsServices.putProduct(id, name, quantity);
    if (!result) return res.status(404).json({ message: 'Product not found' });
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: messages[500] });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await productsServices.deleteProduct(id);
    
    if (result) {
      return res.status(404).json({ message: 'Product not found' });
    }

    return res.status(204).send();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: messages[500] });
  }
};

module.exports = {
  getAllProducts,
  getProduct,
  postProduct,
  putProduct,
  deleteProduct,
};
