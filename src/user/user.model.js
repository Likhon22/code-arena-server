const { mongoose } = require("mongoose");

const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin"],
    },
    photo: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = model("user", userSchema);
module.exports = User;
