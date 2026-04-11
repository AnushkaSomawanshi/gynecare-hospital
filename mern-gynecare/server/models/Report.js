const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema(
  {
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', default: null },
    fileUrl: { type: String, required: true },
    fileName: { type: String, required: true },
    reportType: {
      type: String,
      required: true,
      enum: ['blood-test', 'scan', 'prescription', 'discharge', 'pathology', 'radiology'],
    },
    reportDate: { type: Date, default: Date.now },
    notes: { type: String, default: null },
    isShared: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Report', reportSchema);
