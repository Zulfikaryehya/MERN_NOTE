import mongoose from "mongoose";
import dotenv from "dotenv";

export const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1); // Exit the process with failure
    throw error; // Re-throw the error for further handling
  }
};
