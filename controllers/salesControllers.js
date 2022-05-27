const express = require('express');
const salesServices = require('../services/salesServices');
const {
  quantitySaleValidation,
} = require('../middlewares/index');
const messages = require('../mocks/messages');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const [rows] = await salesServices.getAll();
    res.status(200).json(rows);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: messages[500] });
}
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await salesServices.getAll(id);
    if (rows.length === 0) res.status(404).json({ message: 'Sale not found' });
    res.status(200).json(rows);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: messages[500] });
}
});

router.post(
  '/',
  quantitySaleValidation,
  async (req, res) => {
  try {
    const sales = req.body;
  
    const response = await salesServices.postSales(sales);
    res.status(201).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: messages[500] });
  }
},
);

router.put(
  '/:id',
  quantitySaleValidation,
  async (req, res) => {
  try {
    const { productId, quantity } = req.body[0];
    const { id } = req.params;

    const result = await salesServices.putSale(id, productId, quantity);
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: messages[500] });
  }
},
);

module.exports = router;