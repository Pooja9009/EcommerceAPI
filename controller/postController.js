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
    .then((posts) => {
      res.status(201).json(posts);
    })
    .catch(next);
};

// Update the post
const updatePost = (req, res, next) => {
  res.status(501).json({ reply: "PUT request not supported" });
};

// Delete all the post list
const deletePost = (req, res, next) => {
  // res.json({})
  Post.deleteMany()
    .then((reply) => {
      res.json(reply);
    })
    .catch(next);
};

// Get a single book through ID
const getPostByID = (req, res, next) => {
  Post.findById(req.params.id)
    .then((posts) => {
      res.json(posts);
    })
    .catch(next);
};

const putPostByID = (req, res, next) => {
  Post.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
    .then((posts) => {
      res.json(posts);
    })
    .catch(next);
};

const deletePostByID = (req, res, next) => {
  Post.findByIdAndDelete(req.params.id)
    .then((reply) => {
      res.json(reply);
    })
    .catch(next);
};

module.exports = {
  getAllPost,
  createPost,
  deletePost,
  updatePost,
  putPostByID,
  getPostByID,
  deletePostByID,
};
