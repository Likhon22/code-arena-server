const { mongoose } = require("mongoose");

const { Schema, model } = mongoose;

const questionSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Question = model("question", questionSchema);
module.exports = Question;
