const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create my transaction model
const transactionSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Enter Transaction Name"
    },
    value: {
      type: Number,
      required: "Enter Transaction Amount"
    },
    date: {
      type: Date,
      default: Date.now
    }
  }
);

const Transaction = mongoose.model("Transaction", transactionSchema);

//export model
module.exports = Transaction;
