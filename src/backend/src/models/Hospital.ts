import mongoose, { Document, Schema } from "mongoose";

export interface IHospital extends Document {
  name: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  email: string;
  imageUrl: string;
  facilities: string[];
  bedCapacity: number;
  doctorCount: number;
  emergencyAvailable: boolean;
  coordinates: { lat: number; lng: number };
}

const HospitalSchema = new Schema<IHospital>(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    imageUrl: {
      type: String,
      default: "/assets/generated/hero-gynecology.dim_1400x600.jpg",
    },
    facilities: [{ type: String }],
    bedCapacity: { type: Number, default: 0 },
    doctorCount: { type: Number, default: 0 },
    emergencyAvailable: { type: Boolean, default: false },
    coordinates: {
      lat: { type: Number, default: 0 },
      lng: { type: Number, default: 0 },
    },
  },
  { timestamps: true },
);

export default mongoose.model<IHospital>("Hospital", HospitalSchema);
