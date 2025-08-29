const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "blog post api" });
});

app.use(require("./routes"));

module.exports = app;
