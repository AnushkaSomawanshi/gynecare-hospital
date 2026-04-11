const asyncHandler = require('express-async-handler');
const HealthPackage = require('../models/HealthPackage');

// @desc    Get all active packages
// @route   GET /api/packages
// @access  Public
const getPackages = asyncHandler(async (req, res) => {
  const filter = { isActive: true };
  if (req.query.category) filter.category = req.query.category;
  if (req.query.gender) filter.targetGender = { $in: [req.query.gender, 'Both'] };
  if (req.query.popular) filter.isPopular = req.query.popular === 'true';

  const packages = await HealthPackage.find(filter).sort({ isPopular: -1, price: 1 });
  res.json({ success: true, count: packages.length, data: packages });
});

// @desc    Get package by ID
// @route   GET /api/packages/:id
// @access  Public
const getPackageById = asyncHandler(async (req, res) => {
  const pkg = await HealthPackage.findById(req.params.id);
  if (!pkg || !pkg.isActive) {
    res.status(404);
    throw new Error('Health package not found');
  }
  res.json({ success: true, data: pkg });
});

// @desc    Create package
// @route   POST /api/packages
// @access  Admin
const createPackage = asyncHandler(async (req, res) => {
  const { name, description, price, originalPrice, tests, category, targetGender, ageGroup, isPopular } = req.body;

  if (!name || !description || !price || !originalPrice || !category) {
    res.status(400);
    throw new Error('name, description, price, originalPrice, and category are required');
  }

  const pkg = await HealthPackage.create({ name, description, price, originalPrice, tests: tests || [], category, targetGender, ageGroup, isPopular });
  res.status(201).json({ success: true, data: pkg });
});

// @desc    Update package
// @route   PUT /api/packages/:id
// @access  Admin
const updatePackage = asyncHandler(async (req, res) => {
  const pkg = await HealthPackage.findById(req.params.id);
  if (!pkg) {
    res.status(404);
    throw new Error('Health package not found');
  }

  const fields = ['name', 'description', 'price', 'originalPrice', 'tests', 'category', 'targetGender', 'ageGroup', 'isPopular', 'isActive'];
  fields.forEach((f) => { if (req.body[f] !== undefined) pkg[f] = req.body[f]; });

  const updated = await pkg.save();
  res.json({ success: true, data: updated });
});

module.exports = { getPackages, getPackageById, createPackage, updatePackage };
