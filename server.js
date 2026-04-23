// ✅ 1. Load env FIRST
import dotenv from "dotenv";
dotenv.config();

// ✅ 2. Other imports
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

// ✅ 3. IMPORT ROUTES HERE (👉 this is where yours goes)
import reservationRoutes from "./routes/reservationRoutes.js";

// ✅ 4. Create app
const app = express();

// ✅ 5. Middlewares
app.use(cors());
app.use(express.json());

// ✅ 6. USE ROUTES
app.use("/api/reservations", reservationRoutes);

// ✅ 7. Connect DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB error:", err));

// ✅ 8. Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});