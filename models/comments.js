const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentsSchema = new Schema({
  body: String,
  author: { type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  date: { type: Date, default: Date.now() },

   
  articleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Articles",
  },
});

module.exports = mongoose.model("Comments", commentsSchema);
