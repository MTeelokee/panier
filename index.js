const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(
  express.urlencoded({
    extended: true,
  }));
app.use(express.json());
require("dotenv").config();
const cors = require("cors");
app.use(cors())

const usersRouter = require("./routes/usersRouter");
const articleRouter = require("./routes/articleRouter");
const commentsRouter = require("./routes/commentsRouter");

app.use("/api", usersRouter,articleRouter,commentsRouter );

app.get("/", (req, res) => {
  res.send("Salut Momo").status(200);
});

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, { useNewUrlParser: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB error"));

app.listen(8030, () => {
  console.log(`welcom to my server 8030`);
});
