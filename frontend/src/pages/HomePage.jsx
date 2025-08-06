import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import Navbar from "../components/Navbar.jsx";
import RateLimitedUI from "../components/RateLImetedUI.jsx";
import NoteCard from "../components/NoteCard.jsx";

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [notes, setNotes] = useState([]);

  const baseURL = "http://localhost:5001";

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get(`${baseURL}/api/notes`);

        setNotes(response.data);
        console.log(response.data);
        setIsRateLimited(false);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching notes:", error);
        setIsLoading(false);

        if (error.response) {
          console.log("Status Code:", error.response.status);

          if (error.response.status === 429) {
            setIsRateLimited(true);
            toast.error("Rate limit exceeded. Please try again later.");
          } else {
            setIsRateLimited(false);
            toast.error(
              `Error ${error.response.status}: ${
                error.response.data.message || "Failed to fetch notes"
              }`
            );
          }
        } else {
          // Network error or other issue without a response
          setIsRateLimited(false);
          toast.error("Network error. Please check your connection.");
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchNotes();
  }, []);
  return (
    <div className="min-h-screen">
      <Navbar />
      {isRateLimited && <RateLimitedUI />}

      <div className="max-w-7xl mt-6 mx-auto p-4">
        {isLoading && (
          <div className="text-center text-primary py-10">
            Loading Notes ...
          </div>
        )}
      </div>
      {notes.length > 0 && !isRateLimited && (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note) => (
            <NoteCard key={note._id} note={note} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
