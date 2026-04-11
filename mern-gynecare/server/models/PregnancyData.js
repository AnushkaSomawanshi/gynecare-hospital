const mongoose = require('mongoose');

const weekNoteSchema = new mongoose.Schema({
  week: { type: Number, required: true, min: 1, max: 42 },
  note: { type: String },
  scanImageUrl: { type: String, default: null },
  createdAt: { type: Date, default: Date.now },
});

const pregnancySchema = new mongoose.Schema(
  {
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    currentWeek: { type: Number, required: true, min: 1, max: 42 },
    lmpDate: { type: Date, required: true },
    dueDate: { type: Date },
    weekNotes: [weekNoteSchema],
    symptoms: [{ type: String }],
    nextAppointment: { type: Date, default: null },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

// Auto-calculate due date (LMP + 280 days)
pregnancySchema.pre('save', function (next) {
  if (this.isModified('lmpDate')) {
    const lmp = new Date(this.lmpDate);
    this.dueDate = new Date(lmp.getTime() + 280 * 24 * 60 * 60 * 1000);
  }
  next();
});

module.exports = mongoose.model('PregnancyData', pregnancySchema);
