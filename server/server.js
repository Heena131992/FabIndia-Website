// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const User = require('./models/User');
const Otp = require('./models/Otp');
const adminRoutes = require('./routes/adminRoutes');

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'secret123';

// Middleware
app.use(cors());
app.use(express.json());

app.use('/api/admin', adminRoutes);

// MongoDB Connection
mongoose
    .connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/fabindia_db')
    .then(() => console.log('🍃 MongoDB Database Connected Successfully!'))
    .catch((err) => console.error('❌ MongoDB Connection Error:', err));

// ========================================================
// 1. MOBILE OTP FLOW
// ========================================================

// Route: Send OTP
app.post('/api/auth/send-otp', async (req, res) => {
    try {
        const { mobile } = req.body || {};

        if (!mobile || String(mobile).trim().length !== 10) {
            return res.status(400).json({
                success: false,
                message: 'Valid 10-digit mobile number enter karein.'
            });
        }

        const generatedOtp = Math.floor(1000 + Math.random() * 9000).toString();

        // Pehle purane OTP hatayein
        await Otp.deleteMany({ mobile });

        // Naya OTP save karein
        await Otp.create({ mobile, otp: generatedOtp });

        console.log(`\n================================`);
        console.log(`📱 SMS Gateway Mock`);
        console.log(`Mobile: +91 ${mobile}`);
        console.log(`OTP: ${generatedOtp}`);
        console.log(`================================\n`);

        return res.status(200).json({
            success: true,
            message: 'OTP safaltapoorvak bhej diya gaya hai.',
            debugOtp: generatedOtp,
        });
    } catch (error) {
        console.error('OTP Send Error Detail:', error);
        return res.status(500).json({
            success: false,
            message: error.message || 'Server error: OTP send nahi ho paya.'
        });
    }
});

// Route: Verify OTP
app.post('/api/auth/verify-otp', async (req, res) => {
    try {
        const { mobile, otp } = req.body;

        if (!mobile || !otp) {
            return res.status(400).json({ success: false, message: 'Mobile aur OTP dono zaroori hain.' });
        }

        // Database me OTP check karein
        const otpRecord = await Otp.findOne({ mobile, otp });

        if (!otpRecord) {
            return res.status(400).json({ success: false, message: 'Galat ya expired OTP!' });
        }

        // OTP verify ho gaya toh delete kar dein
        await Otp.deleteMany({ mobile });

        // User check karein MongoDB me, agar nahi hai toh create karein
        let user = await User.findOne({ mobile });
        if (!user) {
            user = await User.create({ mobile });
        }

        // JWT Token generate karein
        const token = jwt.sign({ id: user._id, mobile: user.mobile }, JWT_SECRET, { expiresIn: '7d' });

        return res.status(200).json({
            success: true,
            message: 'Login safal raha!',
            token,
            user: { id: user._id, type: 'mobile', value: user.mobile },
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Server error: Verification fail ho gaya.' });
    }
});

// ========================================================
// 2. EMAIL LOGIN FLOW
// ========================================================

app.post('/api/auth/email-login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password || password.length < 6) {
            return res.status(400).json({ success: false, message: 'Valid email aur 6-character password zaroori hai.' });
        }

        let user = await User.findOne({ email: email.toLowerCase() });

        // Agar user nahi hai toh naya register karein
        if (!user) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            user = await User.create({ email: email.toLowerCase(), password: hashedPassword });
        } else {
            // Password match karein
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ success: false, message: 'Galat password!' });
            }
        }

        const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });

        return res.status(200).json({
            success: true,
            message: 'Login safal raha!',
            token,
            user: { id: user._id, type: 'email', value: user.email },
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Server error: Email login fail ho gaya.' });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on: http://localhost:${PORT}`);
});