import express from "express";
import notesRouter from "./routers/notesRouters.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./Middleware/rateLimiter.js";
import cors from "cors";
import path from "path";

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve(); // Get the current directory name
//middleware
if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  ); // Enable CORS for the frontend
}

app.use(express.json()); // Middleware to parse JSON request bodies
//custom middleware
app.use(rateLimiter); // Apply rate limiting middleware

// app.use((req, res, next) => {
//   console.log("Request received:", req.method, req.url);

//   next();
// }); // Middleware to log incoming requests

app.use("/api/notes", notesRouter); // will  be like a prefix for all routes in notesRouter

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist"))); // Serve static files from the frontend build directory

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html")); // Serve the index.html file for all other routes
  });
}
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port ", PORT);
  });
});
