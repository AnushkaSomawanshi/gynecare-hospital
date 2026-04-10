import { Response } from "express";
import { z } from "zod";
import Appointment from "../models/Appointment";
import { AuthRequest } from "../middleware/auth";

const CreateAppointmentSchema = z.object({
  doctorId: z.string().min(1),
  doctorName: z.string().min(1),
  hospitalId: z.string().min(1),
  hospitalName: z.string().min(1),
  department: z.string().min(1),
  date: z.string().min(1),
  timeSlot: z.string().min(1),
  type: z.enum(["in-person", "teleconsultation"]).default("in-person"),
  reason: z.string().optional(),
  amount: z.number().positive(),
});

export const getAppointments = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const userId = req.user!._id;
    const role = req.user!.role;

    let filter: Record<string, unknown> = {};
    if (role === "patient") {
      filter = { patientId: userId };
    } else if (role === "doctor") {
      filter = { doctorId: String(userId) };
    }
    // admin sees all

    const appointments = await Appointment.find(filter).sort({ createdAt: -1 });
    res.json({ success: true, data: appointments });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Failed to fetch appointments" });
  }
};

export const createAppointment = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const parsed = CreateAppointmentSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ success: false, error: parsed.error.errors[0].message });
      return;
    }

    const user = req.user!;
    const data = parsed.data;

    const appointment = await Appointment.create({
      patientId: user._id,
      patientName: user.name,
      ...data,
      status: "pending",
      paymentStatus: "pending",
    });

    res.status(201).json({ success: true, data: appointment });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Failed to create appointment" });
  }
};

export const cancelAppointment = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) {
      res.status(404).json({ success: false, error: "Appointment not found" });
      return;
    }

    const userId = String(req.user!._id);
    const role = req.user!.role;

    if (
      role === "patient" &&
      String(appointment.patientId) !== userId
    ) {
      res.status(403).json({ success: false, error: "Access denied" });
      return;
    }

    appointment.status = "cancelled";
    await appointment.save();

    res.json({ success: true, data: appointment });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Failed to cancel appointment" });
  }
};
