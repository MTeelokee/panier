const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articlesSchema = new Schema({
  body: String,
  author: String,
  date: { type: Date, default: Date.now() },

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  articleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Articles",
  },
});

module.exports = mongoose.model("Comments", commentsSchema);
