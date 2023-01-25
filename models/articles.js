const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articlesSchema = new Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  serial: Number,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
});

module.exports = mongoose.model("Articles", articlesSchema);
