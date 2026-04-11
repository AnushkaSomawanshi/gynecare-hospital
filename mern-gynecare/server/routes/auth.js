const express = require('express');
const router = express.Router();
const { register, login, sendOtp, verifyOtp, logout, getMe, changePassword } = require('../controllers/authController');
const { protect } = require('../middleware/auth');

router.post('/register', register);
router.post('/login', login);
router.post('/login/otp', sendOtp);
router.post('/verify-otp', verifyOtp);
router.post('/logout', logout);
router.get('/me', protect, getMe);
router.put('/change-password', protect, changePassword);

module.exports = router;
