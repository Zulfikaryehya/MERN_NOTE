import React from "react";
import { Link } from "react-router";
const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-6">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <div className="text-error mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="card-title text-2xl font-bold">No Notes Found</h2>
          <p className="text-base-content/70 mt-2">
            We couldn't find any notes matching your criteria.
          </p>
          <div className="card-actions mt-4">
            <Link to="/create">
              {" "}
              <button className="btn btn-primary">Create New Note</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesNotFound;
