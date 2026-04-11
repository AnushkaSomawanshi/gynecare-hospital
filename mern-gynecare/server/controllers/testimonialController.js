const asyncHandler = require('express-async-handler');
const Testimonial = require('../models/Testimonial');

// @desc    Get approved testimonials
// @route   GET /api/testimonials
// @access  Public
const getTestimonials = asyncHandler(async (req, res) => {
  const testimonials = await Testimonial.find({ isApproved: true }).sort({ date: -1 });
  res.json({ success: true, count: testimonials.length, data: testimonials });
});

// @desc    Get testimonials by department
// @route   GET /api/testimonials/department/:dept
// @access  Public
const getByDepartment = asyncHandler(async (req, res) => {
  const testimonials = await Testimonial.find({
    isApproved: true,
    department: { $regex: req.params.dept, $options: 'i' },
  }).sort({ date: -1 });

  res.json({ success: true, count: testimonials.length, data: testimonials });
});

// @desc    Submit a testimonial
// @route   POST /api/testimonials
// @access  Authenticated patient
const submitTestimonial = asyncHandler(async (req, res) => {
  const { patientName, content, rating, department, treatmentType, location } = req.body;

  if (!patientName || !content || !rating || !department) {
    res.status(400);
    throw new Error('patientName, content, rating, and department are required');
  }

  if (rating < 1 || rating > 5) {
    res.status(400);
    throw new Error('Rating must be between 1 and 5');
  }

  const testimonial = await Testimonial.create({
    patientName,
    content,
    rating,
    department,
    treatmentType,
    location,
    submittedBy: req.user._id,
    isApproved: false,
  });

  res.status(201).json({
    success: true,
    message: 'Testimonial submitted successfully and is pending approval',
    data: testimonial,
  });
});

// @desc    Approve testimonial
// @route   PUT /api/testimonials/:id/approve
// @access  Admin
const approveTestimonial = asyncHandler(async (req, res) => {
  const testimonial = await Testimonial.findById(req.params.id);
  if (!testimonial) {
    res.status(404);
    throw new Error('Testimonial not found');
  }

  testimonial.isApproved = req.body.isApproved !== undefined ? req.body.isApproved : true;
  await testimonial.save();

  res.json({
    success: true,
    message: `Testimonial ${testimonial.isApproved ? 'approved' : 'rejected'}`,
    data: testimonial,
  });
});

module.exports = { getTestimonials, getByDepartment, submitTestimonial, approveTestimonial };
