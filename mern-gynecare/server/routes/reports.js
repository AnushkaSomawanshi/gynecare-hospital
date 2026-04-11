const express = require('express');
const router = express.Router();
const { getReports, uploadReport, getReportById, deleteReport } = require('../controllers/reportController');
const { protect } = require('../middleware/auth');
const upload = require('../middleware/upload');

router.get('/', protect, getReports);
router.post('/', protect, upload.single('report'), uploadReport);
router.get('/:id', protect, getReportById);
router.delete('/:id', protect, deleteReport);

module.exports = router;
