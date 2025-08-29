const router = require("express").Router();

router.use("/api/v1/posts", require("../routes/posts"));


module.exports = router