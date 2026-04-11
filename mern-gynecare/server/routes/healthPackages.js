const express = require('express');
const router = express.Router();
const { getPackages, getPackageById, createPackage, updatePackage } = require('../controllers/healthPackageController');
const { protect } = require('../middleware/auth');
const { authorize } = require('../middleware/roles');

router.get('/', getPackages);
router.get('/:id', getPackageById);
router.post('/', protect, authorize('admin'), createPackage);
router.put('/:id', protect, authorize('admin'), updatePackage);

module.exports = router;
