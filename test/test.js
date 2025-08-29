// /test/test.js

const myDB = require("../db/db");
myDB.create("Arafat", "is it life", "life is not eternal");
myDB.create("Rahman", "The pain of life", "Pain is Eternal");
const posts = myDB.allPosts();
console.log("All posts", posts);
