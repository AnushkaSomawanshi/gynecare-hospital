const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema(
  {
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
    hospitalId: { type: mongoose.Schema.Types.ObjectId, ref: 'Hospital', required: true },
    department: { type: String, required: true },
    appointmentDate: { type: Date, required: true },
    timeSlot: { type: String, required: true },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'completed', 'cancelled'],
      default: 'pending',
    },
    appointmentType: {
      type: String,
      enum: ['in-person', 'teleconsultation'],
      default: 'in-person',
    },
    symptoms: { type: String, default: null },
    notes: { type: String, default: null },
    prescriptionFile: { type: String, default: null },
    cancelledBy: { type: String, default: null },
    cancelReason: { type: String, default: null },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Appointment', appointmentSchema);
