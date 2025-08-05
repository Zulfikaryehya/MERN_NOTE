import Note from "../models/Note.js";

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find().sort({ createdAt: -1 }); // Fetch all notes from the database
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error fetching notes:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body; // Destructure title and content from request body

    const newNote = new Note({ title: title, content: content }); // Create a new note instance
    const savedNote = await newNote.save(); // Save the note to the database

    res.status(201).json({
      message: savedNote,
    });
  } catch (error) {
    console.error("create notes: error", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function updateNote(req, res) {
  try {
    const { title, content } = req.body; // Destructure title and content from request body
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, {
      title,
      content,
    }); // Update the note in the database
    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" }); // If note not found, return 404
    }
    res.status(200).json({
      updatedNote,
    });
  } catch (error) {
    console.error("create notes controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getNoteByID(req, res) {
  try {
    const foundNote = await Note.findById(req.params.id); // Update the note in the database
    if (!foundNote) {
      return res.status(404).json({ foundNote });
    }
    res.status(200).json({
      foundNote,
    });
  } catch (error) {
    console.error(" notes not found", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function deleteNote(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id); // Delete the note from the database
    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json({
      message: `Note deleted successfully`,
    });
  } catch (error) {
    console.error("delete notes controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
