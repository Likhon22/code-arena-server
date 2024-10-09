const { mongoose } = require("mongoose");

const { Schema, model } = mongoose;

const answerSchema = new Schema(
  {
    questionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "question",
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Answer = model("answer", answerSchema);
module.exports = Answer;
