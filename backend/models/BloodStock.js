const mongoose = require("mongoose");
const { Schema } = mongoose;

const BloodStockSchema = new Schema({
  bloodgroup: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 0
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("bloodstock", BloodStockSchema); //database me user name se save hoga
