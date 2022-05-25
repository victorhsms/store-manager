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

module.exports = router;