const express = require('express');
const router = express.Router();
const {
  getDoctors, getTopDoctors, getDoctorById, getDoctorSlots,
  createDoctor, updateDoctor, deleteDoctor,
} = require('../controllers/doctorController');
const { protect } = require('../middleware/auth');
const { authorize } = require('../middleware/roles');

router.get('/', getDoctors);
router.get('/top', getTopDoctors);
router.get('/:id/slots', getDoctorSlots);
router.get('/:id', getDoctorById);
router.post('/', protect, authorize('admin'), createDoctor);
router.put('/:id', protect, authorize('admin', 'doctor'), updateDoctor);
router.delete('/:id', protect, authorize('admin'), deleteDoctor);

module.exports = router;
