const shortid = require("shortid");

class Post {
  constructor(author, title, description) {
    this.id = shortid();
    this.title = title;
    this.description = description;
    this.author = author;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

module.exports = Post;
