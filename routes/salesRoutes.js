const express = require('express');
const salesControllers = require('../controllers/salesControllers');
const {
  productIdSaleValidation,
  quantitySaleValidation,
} = require('../middlewares/index');

const router = express.Router();

router.get('/', salesControllers.getAllSales);

router.get('/:id', salesControllers.getSale);

router.post(
  '/',
  productIdSaleValidation,
  quantitySaleValidation,
  salesControllers.postSale,
);

router.put(
  '/:id',
  productIdSaleValidation,
  quantitySaleValidation,
  salesControllers.putSale,
);

module.exports = router;