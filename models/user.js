const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: [5, "Username should be longer than 5 characters"],
    },
    password: {
      type: String,
      required: true,
      minlength: [8, "password should be longer than 8 characters"],
    },
    role: {
      type: String,
      enum: ["Admin", "User"],
      default: "User",
    },
  },
  { timestamps: true}
);

module.exports = mongoose.model("User", userSchema);
