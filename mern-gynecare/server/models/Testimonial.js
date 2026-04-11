const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema(
  {
    patientName: { type: String, required: true, trim: true },
    content: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    department: { type: String, required: true },
    treatmentType: { type: String },
    location: { type: String },
    date: { type: Date, default: Date.now },
    isApproved: { type: Boolean, default: false },
    submittedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Testimonial', testimonialSchema);
