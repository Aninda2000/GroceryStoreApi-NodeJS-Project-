const mongoose= require('mongoose');

const customerSchema = new mongoose.Schema({
  Email: {
    type: String,
    required: true,
  },
  Phone: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
},{
    timestamps:true
});

const Customer = mongoose.model("customers", customerSchema);
module.exports= Customer;