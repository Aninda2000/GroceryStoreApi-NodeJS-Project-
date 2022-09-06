const express = require("express");
const router = express.Router();
const productController = require("../../controllers/api/product_controller");

router.post("create", productController.createProduct);

module.exports = router;
