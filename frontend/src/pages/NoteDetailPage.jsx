import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { ArrowLeftIcon, LoaderIcon, Trash2Icon } from "lucide-react";

const NoteDetailPage = () => {
  const [note, setNote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = async (e) => {
    e.preventDefault();
    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await api.delete(`/notes/${id}`);
      toast.success("Note deleted successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error deleting note:", error);
      toast.error(
        error.response?.data?.message ||
          "Failed to delete note. Please try again."
      );
    }
  };

  const handleSave = async (e) => {
    if (!note.title.trim() || !note.content.trim()) {
      toast.error("Title and content are required.");
      return;
    }
    e.preventDefault();
    setSaving(true);
    try {
      const response = await api.put(`/notes/${id}`, {
        title: note.title,
        content: note.content,
      });
      setSaving(false);
      // navigator("/"); // Redirect to home page after saving
      toast.success("Note saved successfully!");
    } catch (error) {
      console.error("Error saving note:", error);
      toast.error(
        error.response?.data?.message ||
          "Failed to save note. Please try again."
      );
    }
  };

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        console.log("API response data:", res.data); // Log the response data directly

        // Extract the note from the response - it's wrapped in a 'foundNote' property
        if (res.data && res.data.foundNote) {
          setNote(res.data.foundNote);
        } else {
          console.error("Unexpected response format:", res.data);
          toast.error("Received unexpected data format from server");
        }
      } catch (error) {
        toast.error("Failed to fetch note. Please try again.");
        console.error("Error fetching note:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNote();
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoaderIcon className="animate-spin size-10" />
      </div>
    );
  }

  return (
    <div className="min-h-screen fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-green-900 -z-10 ">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex item-center justify-between mb-6">
            <Link to="/" className="btn btn-ghost hover:bg-primary/10 mb-4">
              <ArrowLeftIcon className="size-5" />
              Back to Home
            </Link>
            <button
              onClick={(e) => handleDelete(e)}
              className="btn btn-outline btn-error ml-4"
            >
              <Trash2Icon className="size-5" />
              Delete Note
            </button>
          </div>
          <div className="card bg-base-100 ">
            <div className="card-body bg-">
              <form className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                  value={note.title}
                  onChange={(e) => setNote({ ...note, title: e.target.value })}
                />
                <label className="label">
                  <span className="label-text">Content</span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-32"
                  value={note.content}
                  onChange={(e) =>
                    setNote({ ...note, content: e.target.value })
                  }
                />
              </form>

              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary min-w-16"
                  disabled={saving}
                  onClick={handleSave}
                >
                  {saving ? (
                    <LoaderIcon className="animate-spin size-5" />
                  ) : (
                    "Save"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NoteDetailPage;
