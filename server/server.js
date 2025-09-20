import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import taskRoutes from "./routes/taskRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";
import cors from "cors";   

dotenv.config();
const app = express();

app.use(express.json());

app.use(cors({ origin: "http://localhost:5173" }));

connectDB();

app.use("/api/tasks", taskRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
