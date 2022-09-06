const Product = require("../../models/products");

module.exports.createProduct = function (req, res) {
  //find the product name in database
  Product.findOne({ productName: req.body.productName }, function (err, docs) {
    if (err) {
      return res.status(500).json({ message: "Internal Server Error!!" });
    }
    if (!docs) {
      //if not found than create new product
      Product.create(req.body);
      return res.status(200).json({ message: "product created successfully" });
    } else {
      return res.status(200).json({ message: "same product already exist" });
    }
  });
};

module.exports.updatePrice = function (req, res) {
  Product.updateOne(
    { productName: req.body.productName },
    { price: req.body.price },
    function (err, docs) {
      if (err) {
        return res.status(500).json({ message: "Internal Server Error!!" });
      }
      if (!docs) {
        return res
          .status(200)
          .json({ message: "product not found in database" });
      } else {
        return res.status(200).json({ message: "price updated successfully" });
      }
    }
  );
};
