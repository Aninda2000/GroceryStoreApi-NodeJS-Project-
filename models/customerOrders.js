const mongoose = require("mongoose");

const customerOrderSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.ObjectId,
      ref: "product",
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    paymentInfo: {
      type: Boolean,
      required: true,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "customer",
    },
  },
  {
    timestamps: true,
  }
);

const CustomerOrder = mongoose.model("customerOrder", customerOrderSchema);
module.exports = CustomerOrder;
