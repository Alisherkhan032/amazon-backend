const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  items: [
    {
      productId: {
        type: String,
        required: true
      },
      productName: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true,
        min: 0
      },
      quantity: {
        type: Number,
        required: true,
        min: 1
      }
    }
  ]
});

module.exports = mongoose.model('Cart', CartSchema);