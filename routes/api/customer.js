const express = require("express");
const router = express.Router();
const customerController = require("../../controllers/api/customer_controller");

router.post("/create", customerController.createCustomer);
router.get("/all-list", customerController.allCustomers);
router.post("/create-order", customerController.createOrder);
router.get("/all-order-list", customerController.customerOrderList);

module.exports = router;
