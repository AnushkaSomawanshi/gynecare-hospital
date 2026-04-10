import { Request, Response } from "express";
import Doctor from "../models/Doctor";

export const getDoctors = async (req: Request, res: Response): Promise<void> => {
  try {
    const { location, speciality, search } = req.query as Record<string, string>;

    const filter: Record<string, unknown> = {};

    if (location) {
      filter.location = { $regex: location, $options: "i" };
    }
    if (speciality) {
      filter.speciality = { $regex: speciality, $options: "i" };
    }
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: "i" } },
        { speciality: { $regex: search, $options: "i" } },
        { expertise: { $elemMatch: { $regex: search, $options: "i" } } },
      ];
    }

    const doctors = await Doctor.find(filter).sort({ rating: -1 });
    res.json({ success: true, data: doctors });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Failed to fetch doctors" });
  }
};

export const getDoctorById = async (req: Request, res: Response): Promise<void> => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) {
      res.status(404).json({ success: false, error: "Doctor not found" });
      return;
    }
    res.json({ success: true, data: doctor });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Failed to fetch doctor" });
  }
};
