const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articlesSchema = new Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  price : Number,
  commentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment",
  },
});
module.exports = mongoose.model("Articles", articlesSchema);
