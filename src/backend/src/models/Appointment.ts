import mongoose, { Document, Schema } from "mongoose";

export type AppointmentStatus = "pending" | "confirmed" | "completed" | "cancelled";
export type AppointmentType = "in-person" | "teleconsultation";

export interface IAppointment extends Document {
  patientId: mongoose.Types.ObjectId;
  patientName: string;
  doctorId: string;
  doctorName: string;
  hospitalId: string;
  hospitalName: string;
  department: string;
  date: string;
  timeSlot: string;
  type: AppointmentType;
  status: AppointmentStatus;
  reason?: string;
  notes?: string;
  paymentStatus: "pending" | "paid";
  amount: number;
}

const AppointmentSchema = new Schema<IAppointment>(
  {
    patientId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    patientName: { type: String, required: true },
    doctorId: { type: String, required: true },
    doctorName: { type: String, required: true },
    hospitalId: { type: String, required: true },
    hospitalName: { type: String, required: true },
    department: { type: String, required: true },
    date: { type: String, required: true },
    timeSlot: { type: String, required: true },
    type: {
      type: String,
      enum: ["in-person", "teleconsultation"],
      default: "in-person",
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "completed", "cancelled"],
      default: "pending",
    },
    reason: { type: String },
    notes: { type: String },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid"],
      default: "pending",
    },
    amount: { type: Number, required: true },
  },
  { timestamps: true },
);

AppointmentSchema.index({ patientId: 1 });
AppointmentSchema.index({ doctorId: 1 });

export default mongoose.model<IAppointment>("Appointment", AppointmentSchema);
