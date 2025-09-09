import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import taskRoutes from "./routes/taskRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect to DB
connectDB();

// Routes
app.use("/api/tasks", taskRoutes);

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
