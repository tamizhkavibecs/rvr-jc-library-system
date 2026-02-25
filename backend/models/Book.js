const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  category: { type: String, required: true },
  department: { type: String, required: true }, // e.g., CSE, DS, ECE
  available_copies: { type: Number, required: true },
  total_copies: { type: Number, required: true },
});

module.exports = mongoose.model("Book", BookSchema);
