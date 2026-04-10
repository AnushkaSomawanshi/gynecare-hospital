import mongoose, { Document, Schema } from "mongoose";

export interface IDoctor extends Document {
  name: string;
  speciality: string;
  qualification: string;
  experience: number;
  rating: number;
  reviewCount: number;
  hospitalId: string;
  hospitalName: string;
  location: string;
  imageUrl: string;
  bio: string;
  consultationFee: number;
  availableDays: string[];
  languages: string[];
  expertise: string[];
}

const DoctorSchema = new Schema<IDoctor>(
  {
    name: { type: String, required: true },
    speciality: { type: String, required: true },
    qualification: { type: String, required: true },
    experience: { type: Number, required: true },
    rating: { type: Number, default: 4.5 },
    reviewCount: { type: Number, default: 0 },
    hospitalId: { type: String, required: true },
    hospitalName: { type: String, required: true },
    location: { type: String, required: true },
    imageUrl: { type: String, default: "/assets/generated/hero-gynecology.dim_1400x600.jpg" },
    bio: { type: String, default: "" },
    consultationFee: { type: Number, required: true },
    availableDays: [{ type: String }],
    languages: [{ type: String }],
    expertise: [{ type: String }],
  },
  { timestamps: true },
);

DoctorSchema.index({ location: 1 });
DoctorSchema.index({ speciality: 1 });

export default mongoose.model<IDoctor>("Doctor", DoctorSchema);
