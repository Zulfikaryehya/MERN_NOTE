import { Trash2Icon, PenSquareIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import { formatDate } from "../lib/utils";
import api from "../lib/axios";
import toast from "react-hot-toast";
const NoteCard = ({ note, setNotes }) => {
  const handleDelete = async (e, Id) => {
    e.preventDefault();

    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      console.log("Deleting note with ID:", Id);
      await api.delete(`/notes/${Id}`);
      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== Id));
      toast.success("Note deleted successfully!");
    } catch (error) {
      console.error("Error deleting note:", error);
      toast.error(
        error.response?.data?.message ||
          "Failed to delete note. Please try again."
      );
    }
  };

  return (
    <Link
      to={`note/${note._id}`}
      className="card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#00FF9D] hover:border-primary  m-4"
    >
      <div className="card-body">
        <h3 className="card-title text-base-content">{note.title}</h3>
        <p className="line-clamp-3 text-base-content">{note.content}</p>
        <div className="card-actions  mt-4  justify-between">
          <span className="text-sm text-base-content">
            {formatDate(note.createdAt)}
          </span>
          <div className="items-center flex gap-1">
            <PenSquareIcon className="size-4" />
            <button
              className="btn btn-ghost btn-xs text-error"
              onClick={(e) => handleDelete(e, note._id)}
            >
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
