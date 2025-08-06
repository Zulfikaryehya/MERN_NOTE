import { Trash2Icon, PenSquareIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import { formatDate } from "../lib/utils";
const NoteCard = ({ note }) => {
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
            <button className="btn btn-ghost btn-xs text-error">
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
