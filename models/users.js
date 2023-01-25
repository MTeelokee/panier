const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: String,
  email: { type: String, required: true },
});

module.exports = mongoose.model("Users", usersSchema);
