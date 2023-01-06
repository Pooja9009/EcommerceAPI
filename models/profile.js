const mongoose = require("mongoose");

const profileSchema = mongoose.Schema(
  {
    bio: {
      type: String,
    },
    accountType: {
      type: String,
      enum: ["public", "private"],
      default: "public",
    },
    website: {
      type: String,
    },
    name: {
      type: String,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      select: false,
    },
    image: {
      type: String,
    },
    DOB: {
      type: String,
      required: true,
    },
    closeFriends: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      select: false,
    },
    followers: {
      type: Map,
      of: {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Profile',
        },
      },
      default: {},
    },

    following: {
      type: Map,
      of: {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Profile',
        },
      },
      default: {},
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("profile", profileSchema);
