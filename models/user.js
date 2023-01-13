const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const validator = require('validator');


const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      minlength: [5, "email should be longer than 5 characters"],
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
    },
    role: {
      type: String,
      enum: ["Admin", "User"],
      default: "User",
    },
  },
  { timestamps: true }
);

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 12);
  next();
});

module.exports = mongoose.model("User", userSchema);
