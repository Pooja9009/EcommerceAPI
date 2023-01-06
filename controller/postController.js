const Post = require("../models/post");

const getAllPost = (req, res, next) => {
  Post.find()
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => next(err));
};

// Create a new post
const createPost = (req, res, next) => {
  Post.create(req.body)
    .then((post) => {
      res.status(201).json(post);
    })
    .catch(next);
};

module.exports = {
  getAllPost,
  createPost,
};
