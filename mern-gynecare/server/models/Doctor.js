const mongoose = require('mongoose');

const slotSchema = new mongoose.Schema({
  day: {
    type: String,
    enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    required: true,
  },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  isAvailable: { type: Boolean, default: true },
});

const doctorSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true, trim: true },
    speciality: {
      type: String,
      required: true,
      enum: [
        'Obstetrics & Gynecology',
        'IVF & Fertility',
        'Gynecologic Oncology',
        'Maternal-Fetal Medicine',
        'PCOS Specialist',
        'Laparoscopic Surgeon',
        'General Gynecology',
        'Reproductive Endocrinology',
        'Pediatric & Adolescent Gynecology',
      ],
    },
    qualifications: [{ type: String }],
    experience: { type: Number, required: true, min: 0 },
    bio: { type: String },
    hospitalIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Hospital' }],
    availableSlots: [slotSchema],
    rating: { type: Number, default: 4.0, min: 1, max: 5 },
    reviewCount: { type: Number, default: 0 },
    consultationFee: { type: Number, required: true },
    imageUrl: { type: String, default: null },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Doctor', doctorSchema);
