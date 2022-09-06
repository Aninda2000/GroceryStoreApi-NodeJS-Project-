const express = require("express");
const router = express.Router();
const customerController = require("../../controllers/api/customer_controller");

router.post("/create", customerController.createCustomer);
router.get("/all-list", customerController.allCustomers);

module.exports = router;
