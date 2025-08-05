import mongoose from "mongoose";

// 1st-Create a schema
// 2nd-Create a model
const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  }
);

const Note = mongoose.model("Note", noteSchema);

export default Note;
