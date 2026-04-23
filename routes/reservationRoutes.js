import express from "express";
import { sendReservation } from "../controllers/reservationController.js";

const router = express.Router();

// ONLY THIS LINE
router.post("/send", sendReservation);

export default router;