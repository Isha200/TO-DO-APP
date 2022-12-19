//schema determines the structure of the document in the database

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const NotesSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    //the number of repetition
    deadline: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//models interact with a collection of name
module.exports = mongoose.model("Notes", NotesSchema);
