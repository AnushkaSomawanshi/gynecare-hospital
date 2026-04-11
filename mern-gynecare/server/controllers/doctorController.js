const asyncHandler = require('express-async-handler');
const Doctor = require('../models/Doctor');
const User = require('../models/User');
const Hospital = require('../models/Hospital');

// @desc    Get all doctors (with pagination + filters)
// @route   GET /api/doctors
// @access  Public
const getDoctors = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 12;
  const skip = (page - 1) * limit;

  const filter = { isActive: true };
  if (req.query.speciality) filter.speciality = req.query.speciality;
  if (req.query.rating) filter.rating = { $gte: parseFloat(req.query.rating) };
  if (req.query.name) filter.name = { $regex: req.query.name, $options: 'i' };
  if (req.query.city) {
    const hospitals = await Hospital.find({ 'address.city': req.query.city }, '_id');
    const hospitalIds = hospitals.map((h) => h._id);
    filter.hospitalIds = { $in: hospitalIds };
  }

  const total = await Doctor.countDocuments(filter);
  const doctors = await Doctor.find(filter)
    .populate('hospitalIds', 'name address')
    .skip(skip)
    .limit(limit)
    .sort({ rating: -1 });

  res.json({
    success: true,
    count: doctors.length,
    total,
    page,
    pages: Math.ceil(total / limit),
    data: doctors,
  });
});

// @desc    Get top-rated doctors
// @route   GET /api/doctors/top
// @access  Public
const getTopDoctors = asyncHandler(async (req, res) => {
  const doctors = await Doctor.find({ isActive: true, rating: { $gte: 4.5 } })
    .populate('hospitalIds', 'name address')
    .limit(6)
    .sort({ rating: -1, reviewCount: -1 });

  res.json({ success: true, count: doctors.length, data: doctors });
});

// @desc    Get doctor by ID
// @route   GET /api/doctors/:id
// @access  Public
const getDoctorById = asyncHandler(async (req, res) => {
  const doctor = await Doctor.findById(req.params.id).populate(
    'hospitalIds',
    'name address phone facilities'
  );

  if (!doctor || !doctor.isActive) {
    res.status(404);
    throw new Error('Doctor not found');
  }

  res.json({ success: true, data: doctor });
});

// @desc    Get available time slots for a doctor on a date
// @route   GET /api/doctors/:id/slots?date=YYYY-MM-DD
// @access  Public
const getDoctorSlots = asyncHandler(async (req, res) => {
  const { date } = req.query;
  if (!date) {
    res.status(400);
    throw new Error('Date query parameter is required');
  }

  const doctor = await Doctor.findById(req.params.id);
  if (!doctor || !doctor.isActive) {
    res.status(404);
    throw new Error('Doctor not found');
  }

  const dayName = new Date(date).toLocaleDateString('en-US', { weekday: 'long' });
  const daySlots = doctor.availableSlots.filter(
    (slot) => slot.day === dayName && slot.isAvailable
  );

  // Generate 30-min slot times within each availability window
  const generatedSlots = [];
  daySlots.forEach((slot) => {
    const [startH, startM] = slot.startTime.split(':').map(Number);
    const [endH, endM] = slot.endTime.split(':').map(Number);
    let current = startH * 60 + startM;
    const end = endH * 60 + endM;
    while (current + 30 <= end) {
      const h = Math.floor(current / 60).toString().padStart(2, '0');
      const m = (current % 60).toString().padStart(2, '0');
      const nextH = Math.floor((current + 30) / 60).toString().padStart(2, '0');
      const nextM = ((current + 30) % 60).toString().padStart(2, '0');
      generatedSlots.push(`${h}:${m} - ${nextH}:${nextM}`);
      current += 30;
    }
  });

  res.json({ success: true, date, day: dayName, data: generatedSlots });
});

// @desc    Create a doctor (admin only)
// @route   POST /api/doctors
// @access  Admin
const createDoctor = asyncHandler(async (req, res) => {
  const { userId, name, speciality, qualifications, experience, bio, hospitalIds, consultationFee, availableSlots } = req.body;

  if (!userId || !name || !speciality || !consultationFee) {
    res.status(400);
    throw new Error('userId, name, speciality, and consultationFee are required');
  }

  const userExists = await User.findById(userId);
  if (!userExists) {
    res.status(404);
    throw new Error('User not found');
  }

  const doctor = await Doctor.create({
    userId, name, speciality,
    qualifications: qualifications || [],
    experience: experience || 0,
    bio, hospitalIds: hospitalIds || [],
    consultationFee,
    availableSlots: availableSlots || [],
  });

  // Update user role to doctor
  await User.findByIdAndUpdate(userId, { role: 'doctor' });

  if (hospitalIds && hospitalIds.length > 0) {
    await Hospital.updateMany(
      { _id: { $in: hospitalIds } },
      { $addToSet: { doctorIds: doctor._id } }
    );
  }

  res.status(201).json({ success: true, data: doctor });
});

// @desc    Update doctor
// @route   PUT /api/doctors/:id
// @access  Admin or Doctor (own profile)
const updateDoctor = asyncHandler(async (req, res) => {
  const doctor = await Doctor.findById(req.params.id);
  if (!doctor) {
    res.status(404);
    throw new Error('Doctor not found');
  }

  // Doctor can only update own profile
  if (req.user.role === 'doctor' && doctor.userId.toString() !== req.user._id.toString()) {
    res.status(403);
    throw new Error('Not authorized to update this profile');
  }

  const allowedFields = ['name', 'bio', 'qualifications', 'experience', 'availableSlots', 'consultationFee', 'imageUrl'];
  if (req.user.role === 'admin') {
    allowedFields.push('speciality', 'hospitalIds', 'rating', 'isActive');
  }

  allowedFields.forEach((field) => {
    if (req.body[field] !== undefined) doctor[field] = req.body[field];
  });

  const updated = await doctor.save();
  res.json({ success: true, data: updated });
});

// @desc    Soft delete doctor
// @route   DELETE /api/doctors/:id
// @access  Admin
const deleteDoctor = asyncHandler(async (req, res) => {
  const doctor = await Doctor.findById(req.params.id);
  if (!doctor) {
    res.status(404);
    throw new Error('Doctor not found');
  }

  doctor.isActive = false;
  await doctor.save();
  res.json({ success: true, message: 'Doctor deactivated successfully' });
});

module.exports = { getDoctors, getTopDoctors, getDoctorById, getDoctorSlots, createDoctor, updateDoctor, deleteDoctor };
