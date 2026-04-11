const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  street: { type: String, required: true },
  city: {
    type: String,
    required: true,
    enum: ['Mumbai', 'Pune', 'Nashik', 'Nagpur', 'Aurangabad', 'Kolhapur'],
  },
  state: { type: String, default: 'Maharashtra' },
  pincode: { type: String, required: true },
});

const hospitalSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    address: { type: addressSchema, required: true },
    phone: { type: String, required: true },
    emergencyPhone: { type: String },
    facilities: [
      {
        type: String,
        enum: [
          'NICU',
          'IVF Lab',
          'Operation Theatre',
          'Pharmacy',
          'Blood Bank',
          'ICU',
          'PICU',
          'Maternity Ward',
          'Scan Centre',
        ],
      },
    ],
    doctorIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' }],
    latitude: { type: Number },
    longitude: { type: Number },
    imageUrl: { type: String, default: null },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Hospital', hospitalSchema);
