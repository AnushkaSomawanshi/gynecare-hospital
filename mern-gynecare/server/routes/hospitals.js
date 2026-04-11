const express = require('express');
const router = express.Router();
const { getHospitals, getCities, getHospitalById, createHospital, updateHospital } = require('../controllers/hospitalController');
const { protect } = require('../middleware/auth');
const { authorize } = require('../middleware/roles');

router.get('/', getHospitals);
router.get('/cities', getCities);
router.get('/:id', getHospitalById);
router.post('/', protect, authorize('admin'), createHospital);
router.put('/:id', protect, authorize('admin'), updateHospital);

module.exports = router;
