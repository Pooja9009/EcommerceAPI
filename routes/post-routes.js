const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const {verifyUser} = require("../middleware/auth");

router
  .route("/")
  .get(postController.getAllPost)
  .post(postController.createPost)
  .put(postController.updatePost)
  .delete(postController.deletePost);

router.use(verifyUser)
  .route("/:id/")
  .get(postController.getPostByID)
  .put(postController.putPostByID)
  .delete(postController.deletePostByID);

module.exports = router;
