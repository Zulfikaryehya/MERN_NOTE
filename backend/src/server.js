import express from "express";
import notesRouter from "./routers/notesRouters.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./Middleware/rateLimiter.js";
import cors from "cors";

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5001;

//middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  })
); // Enable CORS for the frontend
app.use(express.json()); // Middleware to parse JSON request bodies
//custom middleware
app.use(rateLimiter); // Apply rate limiting middleware

// app.use((req, res, next) => {
//   console.log("Request received:", req.method, req.url);

//   next();
// }); // Middleware to log incoming requests

app.use("/api/notes", notesRouter); // will  be like a prefix for all routes in notesRouter

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port ", PORT);
  });
});
