const commentsRouter = require ('express').Router()

const comments = require("../models/comments");
const Comments = require("../models/comments");

commentsRouter.get("/comments", (req, res) => {
    Comments.find()
    .populate("articleId", "userId")
    .then((comments) => res.json(comments))
    .catch((err) => res.json(err));
});

commentsRouter.post("/comments", (req, res) => {
    Comments.create(req.body)
    .then((newComment) => res.json(newComment))
    .catch((err) => res.json(err));
});

commentsRouter.get("/comments/:id", (req, res) => {
    Comments.findOne({ _id: req.params.id })
    .then((oneComment) => res.json(oneComment))
    .catch((err) => res.json(err));
});

commentsRouter.put("/comments/:id", async (req, res) => {
  await Comments.findOne({ _id: req.params.id });
  await Comments.updateOne({ $set: req.body });
  await Comments.findOne({ _id: req.params.id })
    .then((oneComment) => res.json(oneComment))
    .catch((err) => res.json(err));
});

commentsRouter.delete("/comments/:id", (req, res) => {
    Comments.deleteOne({ _id: req.params.id })
    .then(() => res.json("comments deleted"))
    .catch((err) => res.json(err));
});

module.exports = commentsRouter;
