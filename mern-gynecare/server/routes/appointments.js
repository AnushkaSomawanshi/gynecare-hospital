const express = require('express');
const router = express.Router();
const {
  getAppointments, bookAppointment, getAppointmentById,
  cancelAppointment, updateAppointmentStatus, uploadPrescription,
} = require('../controllers/appointmentController');
const { protect } = require('../middleware/auth');
const { authorize } = require('../middleware/roles');
const upload = require('../middleware/upload');

router.get('/', protect, getAppointments);
router.post('/', protect, authorize('patient'), bookAppointment);
router.get('/:id', protect, getAppointmentById);
router.put('/:id/cancel', protect, authorize('patient', 'admin'), cancelAppointment);
router.put('/:id/status', protect, authorize('doctor', 'admin'), updateAppointmentStatus);
router.put('/:id/prescription', protect, authorize('doctor'), upload.single('prescription'), uploadPrescription);

module.exports = router;
