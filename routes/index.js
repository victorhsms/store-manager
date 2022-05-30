const express = require('express');

const router = express.Router();

const productsControllers = require('../controllers/productsControllers');
const salesControllers = require('./salesRoutes');

router.use('/products', productsControllers);
router.use('/sales', salesControllers);

module.exports = router;