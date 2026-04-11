const asyncHandler = require('express-async-handler');
const Report = require('../models/Report');
const path = require('path');

// @desc    Get patient's own reports
// @route   GET /api/reports
// @access  Private (patient: own, doctor/admin: filtered)
const getReports = asyncHandler(async (req, res) => {
  const filter = { isDeleted: false };

  if (req.user.role === 'patient') {
    filter.patientId = req.user._id;
  } else if (req.user.role === 'doctor') {
    filter.isShared = true;
    if (req.query.patientId) filter.patientId = req.query.patientId;
  } else if (req.user.role === 'admin' && req.query.patientId) {
    filter.patientId = req.query.patientId;
  }

  if (req.query.type) filter.reportType = req.query.type;

  const reports = await Report.find(filter)
    .populate('patientId', 'name email')
    .populate('doctorId', 'name speciality')
    .sort({ reportDate: -1 });

  res.json({ success: true, count: reports.length, data: reports });
});

// @desc    Upload a new report
// @route   POST /api/reports
// @access  Private (authenticated)
const uploadReport = asyncHandler(async (req, res) => {
  if (!req.file) {
    res.status(400);
    throw new Error('No file uploaded');
  }

  const { reportType, reportDate, notes, doctorId, isShared } = req.body;

  if (!reportType) {
    res.status(400);
    throw new Error('Report type is required');
  }

  const report = await Report.create({
    patientId: req.user._id,
    doctorId: doctorId || null,
    fileUrl: req.file.path,
    fileName: req.file.originalname,
    reportType,
    reportDate: reportDate ? new Date(reportDate) : new Date(),
    notes,
    isShared: isShared === 'true',
  });

  res.status(201).json({ success: true, data: report });
});

// @desc    Get report by ID
// @route   GET /api/reports/:id
// @access  Private
const getReportById = asyncHandler(async (req, res) => {
  const report = await Report.findById(req.params.id)
    .populate('patientId', 'name email')
    .populate('doctorId', 'name speciality');

  if (!report || report.isDeleted) {
    res.status(404);
    throw new Error('Report not found');
  }

  const isOwner = report.patientId._id.toString() === req.user._id.toString();
  const isAllowed = req.user.role === 'admin' || req.user.role === 'doctor' || isOwner;
  if (!isAllowed) {
    res.status(403);
    throw new Error('Not authorized to view this report');
  }

  res.json({ success: true, data: report });
});

// @desc    Delete report (soft delete)
// @route   DELETE /api/reports/:id
// @access  Patient (own) or Admin
const deleteReport = asyncHandler(async (req, res) => {
  const report = await Report.findById(req.params.id);
  if (!report) {
    res.status(404);
    throw new Error('Report not found');
  }

  const isOwner = report.patientId.toString() === req.user._id.toString();
  if (req.user.role !== 'admin' && !isOwner) {
    res.status(403);
    throw new Error('Not authorized to delete this report');
  }

  report.isDeleted = true;
  await report.save();
  res.json({ success: true, message: 'Report deleted successfully' });
});

module.exports = { getReports, uploadReport, getReportById, deleteReport };
