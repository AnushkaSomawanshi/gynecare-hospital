const express = require('express');
const router = express.Router();
const { getPregnancyData, createOrUpdatePregnancy, addWeekNote, deactivatePregnancy } = require('../controllers/pregnancyController');
const { protect } = require('../middleware/auth');
const { authorize } = require('../middleware/roles');

router.get('/', protect, authorize('patient'), getPregnancyData);
router.post('/', protect, authorize('patient'), createOrUpdatePregnancy);
router.post('/week-note', protect, authorize('patient'), addWeekNote);
router.delete('/', protect, authorize('patient'), deactivatePregnancy);

module.exports = router;
