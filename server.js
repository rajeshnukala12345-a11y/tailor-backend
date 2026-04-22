// ✅ 1. TOP (dotenv first)
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import reservationRoutes from "./routes/reservationRoutes.js";

const app = express();

// ✅ 2. MIDDLE (middleware)
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

// ✅ 3. ROUTES
app.use("/api/v1/reservation", reservationRoutes);

// ✅ 4. 👉 ADD MONGODB CONNECTION HERE
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected ✅"))
  .catch(err => console.log("MongoDB error ❌", err.message));

// ✅ 5. START SERVER (LAST)
app.listen(5000, () => {
  console.log("Server running on port 5000");
});    