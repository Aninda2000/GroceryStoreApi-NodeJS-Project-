const express = require("express");
const router = express.Router();
const productController = require("../../controllers/api/product_controller");

router.post("/create", productController.createProduct);
router.post("/update/product-price", productController.updatePrice);

module.exports = router;
