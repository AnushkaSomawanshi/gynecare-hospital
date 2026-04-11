const asyncHandler = require('express-async-handler');
const Appointment = require('../models/Appointment');
const Doctor = require('../models/Doctor');
const path = require('path');

// @desc    Get appointments
// @route   GET /api/appointments
// @access  Private (patient: own, doctor: own, admin: all)
const getAppointments = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  let filter = {};
  if (req.user.role === 'patient') {
    filter.patientId = req.user._id;
  } else if (req.user.role === 'doctor') {
    const doctor = await Doctor.findOne({ userId: req.user._id });
    if (!doctor) {
      return res.json({ success: true, count: 0, total: 0, data: [] });
    }
    filter.doctorId = doctor._id;
  }

  if (req.query.status) filter.status = req.query.status;
  if (req.query.date) {
    const date = new Date(req.query.date);
    filter.appointmentDate = {
      $gte: date,
      $lt: new Date(date.getTime() + 24 * 60 * 60 * 1000),
    };
  }

  const total = await Appointment.countDocuments(filter);
  const appointments = await Appointment.find(filter)
    .populate('patientId', 'name email phone')
    .populate({ path: 'doctorId', select: 'name speciality imageUrl' })
    .populate('hospitalId', 'name address')
    .skip(skip)
    .limit(limit)
    .sort({ appointmentDate: -1 });

  res.json({
    success: true,
    count: appointments.length,
    total,
    page,
    pages: Math.ceil(total / limit),
    data: appointments,
  });
});

// @desc    Book appointment
// @route   POST /api/appointments
// @access  Patient
const bookAppointment = asyncHandler(async (req, res) => {
  const { doctorId, hospitalId, department, appointmentDate, timeSlot, appointmentType, symptoms, notes } = req.body;

  if (!doctorId || !hospitalId || !department || !appointmentDate || !timeSlot) {
    res.status(400);
    throw new Error('doctorId, hospitalId, department, appointmentDate and timeSlot are required');
  }

  const doctor = await Doctor.findById(doctorId);
  if (!doctor || !doctor.isActive) {
    res.status(404);
    throw new Error('Doctor not found');
  }

  // Check for duplicate booking (same patient, doctor, date, slot)
  const existing = await Appointment.findOne({
    patientId: req.user._id,
    doctorId,
    appointmentDate: new Date(appointmentDate),
    timeSlot,
    status: { $in: ['pending', 'confirmed'] },
  });

  if (existing) {
    res.status(400);
    throw new Error('You already have an appointment at this time slot');
  }

  const appointment = await Appointment.create({
    patientId: req.user._id,
    doctorId,
    hospitalId,
    department,
    appointmentDate: new Date(appointmentDate),
    timeSlot,
    appointmentType: appointmentType || 'in-person',
    symptoms,
    notes,
  });

  const populated = await Appointment.findById(appointment._id)
    .populate('doctorId', 'name speciality consultationFee')
    .populate('hospitalId', 'name address');

  res.status(201).json({ success: true, data: populated });
});

// @desc    Get appointment by ID
// @route   GET /api/appointments/:id
// @access  Private
const getAppointmentById = asyncHandler(async (req, res) => {
  const appointment = await Appointment.findById(req.params.id)
    .populate('patientId', 'name email phone')
    .populate('doctorId', 'name speciality consultationFee imageUrl')
    .populate('hospitalId', 'name address phone');

  if (!appointment) {
    res.status(404);
    throw new Error('Appointment not found');
  }

  // Access control: patient only sees their own
  if (
    req.user.role === 'patient' &&
    appointment.patientId._id.toString() !== req.user._id.toString()
  ) {
    res.status(403);
    throw new Error('Not authorized');
  }

  res.json({ success: true, data: appointment });
});

// @desc    Cancel appointment
// @route   PUT /api/appointments/:id/cancel
// @access  Patient or Admin
const cancelAppointment = asyncHandler(async (req, res) => {
  const appointment = await Appointment.findById(req.params.id);
  if (!appointment) {
    res.status(404);
    throw new Error('Appointment not found');
  }

  if (req.user.role === 'patient' && appointment.patientId.toString() !== req.user._id.toString()) {
    res.status(403);
    throw new Error('Not authorized to cancel this appointment');
  }

  if (['completed', 'cancelled'].includes(appointment.status)) {
    res.status(400);
    throw new Error(`Cannot cancel an appointment that is already ${appointment.status}`);
  }

  appointment.status = 'cancelled';
  appointment.cancelledBy = req.user.role;
  appointment.cancelReason = req.body.reason || null;
  await appointment.save();

  res.json({ success: true, data: appointment });
});

// @desc    Update appointment status
// @route   PUT /api/appointments/:id/status
// @access  Doctor or Admin
const updateAppointmentStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;
  const validStatuses = ['confirmed', 'completed', 'cancelled'];

  if (!validStatuses.includes(status)) {
    res.status(400);
    throw new Error(`Status must be one of: ${validStatuses.join(', ')}`);
  }

  const appointment = await Appointment.findById(req.params.id);
  if (!appointment) {
    res.status(404);
    throw new Error('Appointment not found');
  }

  if (req.user.role === 'doctor') {
    const doctor = await Doctor.findOne({ userId: req.user._id });
    if (!doctor || appointment.doctorId.toString() !== doctor._id.toString()) {
      res.status(403);
      throw new Error('Not authorized to update this appointment');
    }
  }

  appointment.status = status;
  if (status === 'cancelled') {
    appointment.cancelledBy = req.user.role;
    appointment.cancelReason = req.body.reason || null;
  }
  await appointment.save();

  res.json({ success: true, data: appointment });
});

// @desc    Upload prescription to appointment
// @route   PUT /api/appointments/:id/prescription
// @access  Doctor
const uploadPrescription = asyncHandler(async (req, res) => {
  const appointment = await Appointment.findById(req.params.id);
  if (!appointment) {
    res.status(404);
    throw new Error('Appointment not found');
  }

  const doctor = await Doctor.findOne({ userId: req.user._id });
  if (!doctor || appointment.doctorId.toString() !== doctor._id.toString()) {
    res.status(403);
    throw new Error('Not authorized to upload prescription for this appointment');
  }

  if (!req.file) {
    res.status(400);
    throw new Error('No file uploaded');
  }

  appointment.prescriptionFile = req.file.path;
  await appointment.save();

  res.json({ success: true, message: 'Prescription uploaded', data: appointment });
});

module.exports = { getAppointments, bookAppointment, getAppointmentById, cancelAppointment, updateAppointmentStatus, uploadPrescription };
