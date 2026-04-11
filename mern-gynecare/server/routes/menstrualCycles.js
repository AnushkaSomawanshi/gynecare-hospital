const express = require('express');
const router = express.Router();
const { getCycles, logCycle, updateCycle, deleteCycle } = require('../controllers/menstrualController');
const { protect } = require('../middleware/auth');
const { authorize } = require('../middleware/roles');

router.get('/', protect, authorize('patient'), getCycles);
router.post('/', protect, authorize('patient'), logCycle);
router.put('/:id', protect, authorize('patient'), updateCycle);
router.delete('/:id', protect, authorize('patient'), deleteCycle);

module.exports = router;
