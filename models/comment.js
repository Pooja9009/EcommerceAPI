const mongoose = require("mongoose");
const commentSchema = mongoose.Schema({
  body: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  commenter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});
module.export = mongoose.model("Comment", commentSchema);