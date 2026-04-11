const mongoose = require('mongoose');

const menstrualSchema = new mongoose.Schema(
  {
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, default: null },
    cycleLength: { type: Number, default: 28 },
    periodLength: { type: Number, default: 5 },
    symptoms: [
      {
        type: String,
        enum: ['cramps', 'bloating', 'headache', 'mood-swings', 'spotting', 'fatigue', 'backache'],
      },
    ],
    flow: { type: String, enum: ['light', 'medium', 'heavy'], default: 'medium' },
    notes: { type: String, default: null },
  },
  { timestamps: true }
);

module.exports = mongoose.model('MenstrualCycle', menstrualSchema);
