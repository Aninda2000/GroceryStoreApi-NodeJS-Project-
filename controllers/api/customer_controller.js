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


//api to create order
module.exports.createOrder = function (req, res) {
  var order = [];

  // console.log(req.body);
  var productlist = req.body.ProductList.split(",");
  // console.log(productlist);
  //search all products coming thorough the product list
  for (let i = 0; i < productlist.length; i++) {
    Product.findById(productlist[i], function (err, docs) {
      if (err) {
        return res.status(500).json({ message: "Internal Serval Error!!" });
      }
      // console.log(docs);
      if (!docs) {
        return res.status(200).json({ message: "Product not found!!" });
      } else {
        order.push(docs);
      }
    });
  }
  console.log(order);
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

//Api to fetch specific Customer Orders list
module.exports.customerOrderList = function (req, res) {
  Customer.findById(req.body.id, function (err, docs) {
    if (err) {
      return res.status(500).json({ message: "Internal Serval Error!!" });
    }
    if (!docs) {
      return res.status(200).json({ message: "Customer Not Found" });
    } else {
      return res
        .status(200)
        .json({ message: "Internal Serval Error!!", data: docs.orders });
    }
  });
};