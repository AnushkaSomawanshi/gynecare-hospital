import { Request, Response } from "express";
import Hospital from "../models/Hospital";

export const getHospitals = async (_req: Request, res: Response): Promise<void> => {
  try {
    const hospitals = await Hospital.find().sort({ name: 1 });
    res.json({ success: true, data: hospitals });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Failed to fetch hospitals" });
  }
};

export const getHospitalById = async (req: Request, res: Response): Promise<void> => {
  try {
    const hospital = await Hospital.findById(req.params.id);
    if (!hospital) {
      res.status(404).json({ success: false, error: "Hospital not found" });
      return;
    }
    res.json({ success: true, data: hospital });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Failed to fetch hospital" });
  }
};
