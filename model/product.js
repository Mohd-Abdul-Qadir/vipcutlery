const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  imageUrls: {
    type: Array,
    required: true,
  },
});
const User = mongoose.model("PRODUCT", productSchema);
module.exports = User;
