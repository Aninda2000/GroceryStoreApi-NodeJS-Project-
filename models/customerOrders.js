const mongoose = require("mongoose");

const customerOrderSchema = new mongoose.Schema({
  productList: [
    {
        type: mongoose.Schema.ObjectId,
        ref: 'product'
    }
  ],   
  totalPrice: {
    type: Number,
    required: true,
  },
  paymentInfo: {
    type: Boolean,
    required: true,
  },
});

const CustomerOrder = mongoose.model("customerOrder", customerOrderSchema);
module.exports = CustomerOrder;
