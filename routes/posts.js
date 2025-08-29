const router = require("express").Router();
const myDB = require("../db/db");

router.get("", (req, res) => {
  const posts = myDB.allPosts();
  res.status(200).json(posts);
});

router.post("/create", (req, res) => {
  const { author, title, description } = req.body;
  const post = myDB.create(author, title, description);
  res.status(201).json({ message: "post created succesfully", post });
});

router.get("/p/:postId", (req, res) => {
  const postId = req.params.postId;
  const post = myDB.findById(postId);
  res.status(200).json({ message: "post found", post });
});

router.get("/a/:author", (req, res) => {
  const author = req.params.author;
  const posts = myDB.findByAuthor(author);
  res.status(200).json({ message: "succesful", posts });
});

module.exports = router;
