import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import cors from "cors";

dotenv.config();

const server = express();
const PORT = process.env.PORT || 5001;

connectDB();

server.use(cors({ origin: "http://localhost:3000" }));

server.use(express.json());

server.use("/api/notes", notesRoutes);

server.listen(PORT, () => {
  console.log("Server started on PORT:", PORT);
});
