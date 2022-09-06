const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productCatagory: {
      type: String,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantityAvailable: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("products", productSchema);
module.exports = Product;
