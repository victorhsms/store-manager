const express = require('express');
const productsServices = require('../services/productsServices');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const [rows] = await productsServices.getAll();
    res.status(200).json(rows);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Erro inesperado' });
}
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await productsServices.getAll(id);
    if (rows.length === 0) res.status(404).json({ message: 'Product not found' });
    res.status(200).json(rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Erro inesperado' });
}
});

module.exports = router;
