const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");
const auth = require("../middleware/auth");

router
  .use(auth.verifyUser)
  .route("/:id/comments")
  .get(commentController.getAllComment)
  .post(commentController.createComment)
  .delete(commentController.deleteAllComment);

router
  .use(auth.verifyUser)
  .route("/:id/comments/:comment_id")
  .get(commentController.getCommentById)
  .put(commentController.updateCommentById)
  .delete(commentController.deleteCommentById);

module.exports = router;