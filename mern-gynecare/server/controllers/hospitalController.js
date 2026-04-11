const asyncHandler = require('express-async-handler');
const Hospital = require('../models/Hospital');

// @desc    Get all hospitals (with filters)
// @route   GET /api/hospitals
// @access  Public
const getHospitals = asyncHandler(async (req, res) => {
  const filter = { isActive: true };
  if (req.query.city) filter['address.city'] = req.query.city;
  if (req.query.facility) filter.facilities = { $in: [req.query.facility] };

  const hospitals = await Hospital.find(filter)
    .populate('doctorIds', 'name speciality rating consultationFee imageUrl')
    .sort({ name: 1 });

  res.json({ success: true, count: hospitals.length, data: hospitals });
});

// @desc    Get available cities
// @route   GET /api/hospitals/cities
// @access  Public
const getCities = asyncHandler(async (req, res) => {
  const cities = await Hospital.distinct('address.city', { isActive: true });
  res.json({ success: true, data: cities });
});

// @desc    Get hospital by ID
// @route   GET /api/hospitals/:id
// @access  Public
const getHospitalById = asyncHandler(async (req, res) => {
  const hospital = await Hospital.findById(req.params.id).populate(
    'doctorIds',
    'name speciality qualifications experience rating consultationFee imageUrl bio'
  );

  if (!hospital || !hospital.isActive) {
    res.status(404);
    throw new Error('Hospital not found');
  }

  res.json({ success: true, data: hospital });
});

// @desc    Create hospital
// @route   POST /api/hospitals
// @access  Admin
const createHospital = asyncHandler(async (req, res) => {
  const { name, address, phone, emergencyPhone, facilities, latitude, longitude, imageUrl } = req.body;

  if (!name || !address || !phone) {
    res.status(400);
    throw new Error('Name, address, and phone are required');
  }

  const hospital = await Hospital.create({
    name, address, phone, emergencyPhone, facilities: facilities || [],
    latitude, longitude, imageUrl,
  });

  res.status(201).json({ success: true, data: hospital });
});

// @desc    Update hospital
// @route   PUT /api/hospitals/:id
// @access  Admin
const updateHospital = asyncHandler(async (req, res) => {
  const hospital = await Hospital.findById(req.params.id);
  if (!hospital) {
    res.status(404);
    throw new Error('Hospital not found');
  }

  const fields = ['name', 'address', 'phone', 'emergencyPhone', 'facilities', 'latitude', 'longitude', 'imageUrl', 'isActive'];
  fields.forEach((f) => {
    if (req.body[f] !== undefined) hospital[f] = req.body[f];
  });

  const updated = await hospital.save();
  res.json({ success: true, data: updated });
});

module.exports = { getHospitals, getCities, getHospitalById, createHospital, updateHospital };
