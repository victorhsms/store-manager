const express = require('express');

const router = express.Router();

const productsRoutes = require('./productsRoutes');
const salesRoutes = require('./salesRoutes');

router.use('/products', productsRoutes);
router.use('/sales', salesRoutes);

module.exports = router;