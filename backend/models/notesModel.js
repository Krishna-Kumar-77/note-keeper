const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const notesSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      required: true,
      type: String,
    },
    message: {
      required: true,
      type: String,
    },
    date: {
      required: true,
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
notesSchema.plugin(uniqueValidator);
const Note = mongoose.model("Notes", notesSchema);
module.exports = Note;
