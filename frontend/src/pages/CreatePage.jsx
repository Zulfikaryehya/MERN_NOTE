import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowLeftIcon } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";
import api from "../lib/axios";
const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigator = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      toast.error("Title and content are required.");
      return;
    }
    try {
      api.post("/notes", {
        title,
        content,
      });
      setContent("");
      setTitle("");
      navigator("/"); // Redirect to home page after creation
      toast.success("Note created successfully!");
    } catch (error) {
      console.error("Error creating note:", error);
      toast.error(
        error.response?.data?.message ||
          "Failed to create note. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-green-900 -z-10">
      <div className=" container mx-auto px-4 py-8">
        {" "}
        <div className="mx-auto max-w-2xl">
          <Link to={"/"} className="btn btn-ghost hover:bg-primary/10 mb-4">
            <ArrowLeftIcon className="size-5" />
            Back to Home
          </Link>
          <div className="bg-base-100 card">
            <div className="card-body">
              <h2 className="card-title mb-4 text-2xl">Create Note</h2>
              <form onSubmit={handleSubmit} method="POST">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Title</span>
                  </label>
                  <input
                    type="text"
                    value={title}
                    placeholder="Note title"
                    required
                    className="input-bordered input"
                    onChange={(e) => setTitle(e.target.value)}
                  />

                  <label className="label">
                    <span className="label-text">Content</span>
                  </label>
                  <textarea
                    name="content"
                    type="text"
                    value={content}
                    placeholder="Content of the note"
                    required
                    className="textarea-bordered textarea h-32"
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>
                <div className="card-actions justify-end mt-4">
                  <button
                    className="btn bg-primary"
                    type="Submit"
                    disabled={isLoading}
                  >
                    {isLoading ? "Saving..." : "Save Note"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
