const express = require("express");
const router = express.Router();
const customerController = require("../../controllers/api/customer_controller");

router.post("/create", customerController.createCustomer);

module.exports = router;
