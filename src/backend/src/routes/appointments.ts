import { Router } from "express";
import {
  getAppointments,
  createAppointment,
  cancelAppointment,
} from "../controllers/appointmentsController";
import { protect } from "../middleware/auth";

const router = Router();

router.use(protect);

router.get("/", getAppointments);
router.post("/", createAppointment);
router.patch("/:id/cancel", cancelAppointment);

export default router;
