import { Router } from "express";
import { getHospitals, getHospitalById } from "../controllers/hospitalsController";

const router = Router();

router.get("/", getHospitals);
router.get("/:id", getHospitalById);

export default router;
