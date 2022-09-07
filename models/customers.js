const mongoose= require('mongoose');

const customerSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    orders: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "customerOrder",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Customer = mongoose.model("customers", customerSchema);
module.exports= Customer;