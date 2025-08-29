const Post = require("../models/Post");

class MyDB {
  constructor() {
    this.posts = [];
  }

  create(author, title, description) {
    const post = new Post(author, title, description);
    this.posts.push(post);
    return post;
  }

  allPosts() {
    return this.posts;
  }

  findById(postId) {
    const res = this.posts.find((post) => post.id === postId);
    return res;
  }

  findByAuthor(author) {
    const posts = this.posts.filter((post) => post.author === author);
    return posts;
  }

  updateById(postId, postBody) {
    const post = this.findById(postId);
    post.title = postBody.title ?? post.title;
    post.description = postBody.description ?? post.description;
    post.updatedAt = new Date();
    return post;
  }

  deleteById(postId) {
    const index = this.posts.findIndex((post) => post.id === postId);
    if (index != -1) {
      this.posts.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }
}

const myDB = new MyDB();

module.exports = myDB;
