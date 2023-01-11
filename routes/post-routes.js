const express = require("express");
const router = express.Router();
const postController = require("../controller/postController");
// const {verifyUser} = require("../middleware/auth");

router
  .route("/:id/posts")
  .get(postController.getAllPost)
  .post(postController.createPost)
  .put(postController.updatePost)
  .delete(postController.deletePost);

router
  .route("/:id/posts/:post_id")
  .get(postController.getPostByID)
  .put(postController.putPostByID)
  .delete(postController.deletePostByID);

module.exports = router;
