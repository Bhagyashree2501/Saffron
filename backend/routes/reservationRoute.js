import express from "express";
import { send_reservation } from "../controller/reservation";

const router = express.Router();

router.post("/send", send_reservation);

export default router;