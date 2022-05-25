const express = require('express');
const salesServices = require('../services/salesServices');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const [rows] = await salesServices.getAll();
    res.status(200).json(rows);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Erro inesperado' });
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
    res.status(500).json({ message: 'Erro inesperado' });
}
});

module.exports = router;