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

module.exports = router;
