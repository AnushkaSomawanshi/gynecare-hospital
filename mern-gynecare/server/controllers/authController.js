const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const User = require('../models/User');
const generateToken = require('../utils/generateToken');

// @desc    Register new user
// @route   POST /api/auth/register
// @access  Public
const register = asyncHandler(async (req, res) => {
  const { name, email, password, phone, role, abhaId } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Name, email and password are required');
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User with this email already exists');
  }

  const allowedRoles = ['patient', 'doctor'];
  const userRole = allowedRoles.includes(role) ? role : 'patient';

  const user = await User.create({ name, email, password, phone, role: userRole, abhaId });

  res.status(201).json({
    success: true,
    data: {
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.role,
      abhaId: user.abhaId,
      token: generateToken(user._id),
    },
  });
});

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error('Email and password are required');
  }

  const user = await User.findOne({ email }).select('+password');
  if (!user || !user.isActive) {
    res.status(401);
    throw new Error('Invalid credentials');
  }

  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    res.status(401);
    throw new Error('Invalid credentials');
  }

  res.json({
    success: true,
    data: {
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.role,
      abhaId: user.abhaId,
      profileImage: user.profileImage,
      token: generateToken(user._id),
    },
  });
});

// @desc    Login with OTP (send OTP)
// @route   POST /api/auth/login/otp
// @access  Public
const sendOtp = asyncHandler(async (req, res) => {
  const { phone } = req.body;

  if (!phone) {
    res.status(400);
    throw new Error('Phone number is required');
  }

  const user = await User.findOne({ phone });
  if (!user || !user.isActive) {
    res.status(404);
    throw new Error('No account found with this phone number');
  }

  // Generate 6-digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const otpHash = crypto.createHash('sha256').update(otp).digest('hex');
  const otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

  user.otpHash = otpHash;
  user.otpExpiry = otpExpiry;
  await user.save({ validateBeforeSave: false });

  // In production: send SMS. For development, return OTP in response.
  const response = { success: true, message: 'OTP sent successfully' };
  if (process.env.NODE_ENV === 'development') {
    response.otp = otp; // Only expose in dev
  }

  res.json(response);
});

// @desc    Verify OTP and login
// @route   POST /api/auth/verify-otp
// @access  Public
const verifyOtp = asyncHandler(async (req, res) => {
  const { phone, otp } = req.body;

  if (!phone || !otp) {
    res.status(400);
    throw new Error('Phone and OTP are required');
  }

  const user = await User.findOne({ phone }).select('+otpHash +otpExpiry');
  if (!user) {
    res.status(401);
    throw new Error('Invalid OTP');
  }

  if (!user.otpHash || !user.otpExpiry || user.otpExpiry < new Date()) {
    res.status(401);
    throw new Error('OTP has expired. Please request a new one.');
  }

  const otpHash = crypto.createHash('sha256').update(otp).digest('hex');
  if (otpHash !== user.otpHash) {
    res.status(401);
    throw new Error('Invalid OTP');
  }

  // Clear OTP fields
  user.otpHash = undefined;
  user.otpExpiry = undefined;
  await user.save({ validateBeforeSave: false });

  res.json({
    success: true,
    data: {
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.role,
      token: generateToken(user._id),
    },
  });
});

// @desc    Logout (client-side, endpoint for completeness)
// @route   POST /api/auth/logout
// @access  Public
const logout = asyncHandler(async (req, res) => {
  res.json({ success: true, message: 'Logged out successfully' });
});

// @desc    Get current user
// @route   GET /api/auth/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  res.json({ success: true, data: user });
});

// @desc    Change password
// @route   PUT /api/auth/change-password
// @access  Private
const changePassword = asyncHandler(async (req, res) => {
  const { currentPassword, newPassword } = req.body;

  if (!currentPassword || !newPassword) {
    res.status(400);
    throw new Error('Current and new password are required');
  }

  const user = await User.findById(req.user._id).select('+password');
  const isMatch = await user.matchPassword(currentPassword);
  if (!isMatch) {
    res.status(401);
    throw new Error('Current password is incorrect');
  }

  user.password = newPassword;
  await user.save();

  res.json({ success: true, message: 'Password changed successfully' });
});

module.exports = { register, login, sendOtp, verifyOtp, logout, getMe, changePassword };
