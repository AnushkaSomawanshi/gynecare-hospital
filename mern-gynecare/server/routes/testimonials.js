const express = require('express');
const router = express.Router();
const { getTestimonials, getByDepartment, submitTestimonial, approveTestimonial } = require('../controllers/testimonialController');
const { protect } = require('../middleware/auth');
const { authorize } = require('../middleware/roles');

router.get('/', getTestimonials);
router.get('/department/:dept', getByDepartment);
router.post('/', protect, authorize('patient'), submitTestimonial);
router.put('/:id/approve', protect, authorize('admin'), approveTestimonial);

module.exports = router;
