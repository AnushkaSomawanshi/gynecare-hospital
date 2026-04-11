const asyncHandler = require('express-async-handler');
const MenstrualCycle = require('../models/MenstrualCycle');

// @desc    Get current patient's cycle logs
// @route   GET /api/menstrual
// @access  Patient
const getCycles = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 12;
  const skip = (page - 1) * limit;

  const total = await MenstrualCycle.countDocuments({ patientId: req.user._id });
  const cycles = await MenstrualCycle.find({ patientId: req.user._id })
    .skip(skip)
    .limit(limit)
    .sort({ startDate: -1 });

  res.json({
    success: true,
    count: cycles.length,
    total,
    page,
    pages: Math.ceil(total / limit),
    data: cycles,
  });
});

// @desc    Log a new cycle
// @route   POST /api/menstrual
// @access  Patient
const logCycle = asyncHandler(async (req, res) => {
  const { startDate, endDate, cycleLength, periodLength, symptoms, flow, notes } = req.body;

  if (!startDate) {
    res.status(400);
    throw new Error('startDate is required');
  }

  const cycle = await MenstrualCycle.create({
    patientId: req.user._id,
    startDate: new Date(startDate),
    endDate: endDate ? new Date(endDate) : null,
    cycleLength: cycleLength || 28,
    periodLength: periodLength || 5,
    symptoms: symptoms || [],
    flow: flow || 'medium',
    notes,
  });

  res.status(201).json({ success: true, data: cycle });
});

// @desc    Update cycle entry
// @route   PUT /api/menstrual/:id
// @access  Patient
const updateCycle = asyncHandler(async (req, res) => {
  const cycle = await MenstrualCycle.findById(req.params.id);
  if (!cycle) {
    res.status(404);
    throw new Error('Cycle entry not found');
  }

  if (cycle.patientId.toString() !== req.user._id.toString()) {
    res.status(403);
    throw new Error('Not authorized to update this entry');
  }

  const fields = ['startDate', 'endDate', 'cycleLength', 'periodLength', 'symptoms', 'flow', 'notes'];
  fields.forEach((f) => {
    if (req.body[f] !== undefined) {
      if (['startDate', 'endDate'].includes(f) && req.body[f]) {
        cycle[f] = new Date(req.body[f]);
      } else {
        cycle[f] = req.body[f];
      }
    }
  });

  const updated = await cycle.save();
  res.json({ success: true, data: updated });
});

// @desc    Delete cycle entry
// @route   DELETE /api/menstrual/:id
// @access  Patient
const deleteCycle = asyncHandler(async (req, res) => {
  const cycle = await MenstrualCycle.findById(req.params.id);
  if (!cycle) {
    res.status(404);
    throw new Error('Cycle entry not found');
  }

  if (cycle.patientId.toString() !== req.user._id.toString()) {
    res.status(403);
    throw new Error('Not authorized to delete this entry');
  }

  await cycle.deleteOne();
  res.json({ success: true, message: 'Cycle entry deleted' });
});

module.exports = { getCycles, logCycle, updateCycle, deleteCycle };
