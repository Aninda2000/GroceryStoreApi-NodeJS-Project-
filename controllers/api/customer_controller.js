const Customer = require("../../models/customers");

module.exports.createCustomer = function (req, res) {
  //find the cusstomer in database
  Customer.findOne({ email: req.body.email }, function (err, docs) {
    if (err) {
      return res.status(500).json({ message: "Internal Server Error!!" });
    }
    if (!docs) {
      //if not found than create customer
      Customer.create(req.body);
      return res.status(200).json({ message: "customer created successfully" });
    } else {
      return res.status(200).json({ message: "email id already exist" });
    }
  });
};

module.exports.allCustomers = function (req, res) {
  Customer.find({}, function (err, docs) {
    if (err) {
      return res.status(500).json({ message: "Internal Server Error!!" });
    }
    return res.status(200).json({
      message: "fetch customers successfully",
      data: docs,
    });
  });
};
