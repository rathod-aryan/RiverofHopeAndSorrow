const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  project: {
    type: mongoose.Types.ObjectId,
    ref: "Project",
    required: true,
  },
});

module.exports = mongoose.model("Comment", commentSchema);
