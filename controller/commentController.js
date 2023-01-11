const Post = require("../models/post");

const getAllComment = (req, res, next) => {
  Post.find(req.params.id)
    .then((post) => {
      res.status(200).json(post.comment);
    })
    .catch(next);
};

const createComment = (req, res, next) => {
  Post.findById(req.params.id)
    .then((post) => {
      // change this to have commenter id as well
      let comment = {
        body: req.body.body,
        commenter: req.user.userId,
      };
      console.log(req.body);
      console.log(req.user);
      post.comment.push(comment);
      post.save().then((b) => res.status(201).json(b.comment));
    })
    .catch(next);
};

const deleteAllComment = (req, res, next) => {
  Post.findById(req.params.id)
    .then((post) => {
      post.comment = [];
      post.save().then((b = res.json(b.comment)));
    })
    .catch(next);
};

const getCommentById = (req, res, next) => {
  Post.findById(req.params.id)
    .then((post) => {
      let comment = post.comment.find(
        (item) => item.id == req.params.comment_id
      );
      res.json(comment);
    })
    .catch(next);
};

const updateCommentById = (req, res, next) => {
  Post.findById(req.params.id)
    .then((post) => {
      let comment = post.comment.id(req.params.comment_id);
      if (comment.commenter != req.user.userId) {
        res.status(403);
        return next(new Error("Not authorized"));
      }

      let updatecomment = post.comment.map((item) => {
        if (item.id == req.params.comment_id) {
          if (item.commenter == req.user.userId) item.body = req.body.body;
        }
        return item;
      });
      post.comment = updatecomment;
      post.save().then((b) => res.json(b.comment));
    })
    .catch(next);
};

const deleteommentbyId = (req, res, next) => {
  Post.findById(req.params.post_id)
    .then((post) => {
      let comment = post.comment.id(req.paras.comment_id);
      if (comment == null) {
        res.status(404);
        return next(new Error("Not found"));
      }
      if (comment.commenter != req.user.id) {
        res.status(403);
        return next(new Error("Not authorized"));
      }
      post.comment = post.comment.filter(
        (comment) => comment.id !== req.params.comment_id
      );
      post
        .save()
        .then((post) => res.json(post.comment))
        .catch(next);
    })
    .catch(next);
};

module.exports = {
  getAllComment,
  createComment,
  deleteAllComment,
  getCommentById,
  updateCommentById,
  deleteommentbyId,
};
