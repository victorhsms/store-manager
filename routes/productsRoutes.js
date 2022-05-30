const express = require('express');
const productsControllers = require('../controllers/productsControllers');
const {
  nameValidation,
  quantityValidation,
} = require('../middlewares/index');

const router = express.Router();

router.get('/', productsControllers.getAllProducts);

router.get('/:id', productsControllers.getProduct);

router.post(
  '/',
  nameValidation,
  quantityValidation,
  productsControllers.postProduct,
);

router.put(
  '/:id',
  nameValidation,
  quantityValidation,
  productsControllers.putProduct,
);

router.delete(
  '/:id',
  productsControllers.deleteProduct,
);

module.exports = router;