const mongoose = require("mongoose");
const Profile = require("./profile");

const postSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profile",
  },
  caption: {
    type: String,
  },
  organization: {
    type: String,
  },
  hashtag: Array,
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profile",
    },
  ],
  image: Array,
  comment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment",
  },
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profile",
  },
});
module.exports = mongoose.model("post", postSchema);
