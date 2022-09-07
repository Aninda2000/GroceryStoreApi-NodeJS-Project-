const Customer = require("../../models/customers");
const Order = require("../../models/customerOrders");
const Product = require("../../models/products");

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

module.exports.createOrder = function (req, res) {
  var order = [];
  var totalPrice = 0;

  //search all products coming thorough the product list
  for (let i = 0; i < req.body.ProductList.length; i++) {
    Product.findById(req.body.ProductList[i].id, function (err, docs) {
      if (err) {
        return res.status(500).json({ message: "Internal Serval Error!!" });
      }
      console.log(docs);
      if (!docs) {
        return res.status(200).json({ message: "Product not found!!" });
      } else {
        order.push(docs);
        totalPrice += docs.price;
      }
    });
  }
  //create new order
  var newOrder = Order.create({
    productList: order,
    totalPrice: totalPrice,
    paymentInfo: req.body.paymentInfo,
    user: req.body.user,
  });

  //add to customer orderlist
  Customer.findById(req.body.user, function (err, docs) {
    if (err) {
      return res.status(500).json({ message: "Internal Serval Error!!" });
    }
    docs.orders.push(newOrder);
    docs.save();
    return res.status(200).json({ message: "order created successfully" });
  });
};
