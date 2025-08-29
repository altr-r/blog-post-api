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
module.exports = router;
