const mongoose = require('mongoose');

const healthPackageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    originalPrice: { type: Number, required: true },
    tests: [{ type: String }],
    category: {
      type: String,
      required: true,
      enum: ["Women's Health", 'Pregnancy', 'Fertility', 'Cancer Screening', 'PCOS', 'Wellness'],
    },
    targetGender: { type: String, enum: ['Female', 'Both'], default: 'Female' },
    ageGroup: { type: String, default: '18-60 years' },
    isPopular: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('HealthPackage', healthPackageSchema);
