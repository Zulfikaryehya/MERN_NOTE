import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import NoteDetailPage from "./pages/NoteDetailPage.jsx";
import toast from "react-hot-toast";
const App = () => {
  return (
    <div>
      <h1>My Application</h1>
      <button
        onClick={() => toast.error("This didn't work.")}
        className="btn btn-error p-4 text-white"
      >
        click me
      </button>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
