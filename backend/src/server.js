import express from "express";
import notesRouter from "./routers/notesRouters.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5001;
connectDB();

app.use(express.json()); // Middleware to parse JSON request bodies

app.use("/api/notes", notesRouter); // will  be like a prefix for all routes in notesRouter

app.listen(PORT, () => {
  console.log("Server is running on port ", PORT);
});
