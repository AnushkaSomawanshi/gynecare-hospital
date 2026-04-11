const asyncHandler = require('express-async-handler');
const PregnancyData = require('../models/PregnancyData');

// @desc    Get current patient's pregnancy data
// @route   GET /api/pregnancy
// @access  Patient
const getPregnancyData = asyncHandler(async (req, res) => {
  const data = await PregnancyData.findOne({ patientId: req.user._id, isActive: true });
  if (!data) {
    return res.json({ success: true, data: null, message: 'No active pregnancy tracking found' });
  }
  res.json({ success: true, data });
});

// @desc    Create or update pregnancy tracking
// @route   POST /api/pregnancy
// @access  Patient
const createOrUpdatePregnancy = asyncHandler(async (req, res) => {
  const { currentWeek, lmpDate, symptoms, nextAppointment } = req.body;

  if (!currentWeek || !lmpDate) {
    res.status(400);
    throw new Error('currentWeek and lmpDate are required');
  }

  const existing = await PregnancyData.findOne({ patientId: req.user._id });

  if (existing) {
    existing.currentWeek = currentWeek;
    existing.lmpDate = new Date(lmpDate);
    if (symptoms) existing.symptoms = symptoms;
    if (nextAppointment) existing.nextAppointment = new Date(nextAppointment);
    existing.isActive = true;
    const updated = await existing.save();
    return res.json({ success: true, data: updated });
  }

  const data = await PregnancyData.create({
    patientId: req.user._id,
    currentWeek,
    lmpDate: new Date(lmpDate),
    symptoms: symptoms || [],
    nextAppointment: nextAppointment ? new Date(nextAppointment) : null,
  });

  res.status(201).json({ success: true, data });
});

// @desc    Add a week note
// @route   POST /api/pregnancy/week-note
// @access  Patient
const addWeekNote = asyncHandler(async (req, res) => {
  const { week, note, scanImageUrl } = req.body;

  if (!week || !note) {
    res.status(400);
    throw new Error('week and note are required');
  }

  const data = await PregnancyData.findOne({ patientId: req.user._id, isActive: true });
  if (!data) {
    res.status(404);
    throw new Error('No active pregnancy tracking found. Create one first.');
  }

  // Remove existing note for the same week if exists
  data.weekNotes = data.weekNotes.filter((n) => n.week !== week);
  data.weekNotes.push({ week, note, scanImageUrl: scanImageUrl || null, createdAt: new Date() });
  data.weekNotes.sort((a, b) => a.week - b.week);

  await data.save();
  res.json({ success: true, data });
});

// @desc    Deactivate pregnancy tracking
// @route   DELETE /api/pregnancy
// @access  Patient
const deactivatePregnancy = asyncHandler(async (req, res) => {
  const data = await PregnancyData.findOne({ patientId: req.user._id });
  if (!data) {
    res.status(404);
    throw new Error('No pregnancy tracking found');
  }

  data.isActive = false;
  await data.save();
  res.json({ success: true, message: 'Pregnancy tracking deactivated' });
});

module.exports = { getPregnancyData, createOrUpdatePregnancy, addWeekNote, deactivatePregnancy };
