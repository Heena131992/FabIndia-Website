// server/routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const adminAuth = require('../middleware/adminAuth');

const JWT_SECRET = process.env.JWT_SECRET || 'secret123';

// 1. One-time Setup: First Admin Create karne ke liye
router.post('/register-admin', async (req, res) => {
    try {
        const { email, password, name } = req.body || {};

        if (!email || !password) {
            return res.status(400).json({ success: false, message: 'Email aur password zaroori hain.' });
        }

        const existingAdmin = await User.findOne({ email: email.toLowerCase() });
        if (existingAdmin) {
            return res.status(400).json({ success: false, message: 'Yeh email pehle se registered hai.' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const adminUser = await User.create({
            email: email.toLowerCase(),
            password: hashedPassword,
            role: 'admin',
        });

        return res.status(201).json({
            success: true,
            message: 'Admin account successfully create ho gaya!',
            admin: { id: adminUser._id, email: adminUser.email, role: adminUser.role },
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
});

// 2. Admin Login API
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body || {};

        if (!email || !password) {
            return res.status(400).json({ success: false, message: 'Email aur password dono enter karein.' });
        }

        const admin = await User.findOne({ email: email.toLowerCase() });

        if (!admin || admin.role !== 'admin') {
            return res.status(401).json({ success: false, message: 'Invalid Admin Credentials!' });
        }

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'Galat Password!' });
        }

        const token = jwt.sign(
            { id: admin._id, email: admin.email, role: admin.role },
            JWT_SECRET,
            { expiresIn: '1d' }
        );

        return res.status(200).json({
            success: true,
            message: 'Admin login safal raha!',
            token,
            admin: { id: admin._id, email: admin.email, role: admin.role },
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
});

// 3. Admin Dashboard Analytics / Stats API (Protected with adminAuth)
router.get('/dashboard-stats', adminAuth, async (req, res) => {
    try {
        const totalUsers = await User.countDocuments({ role: 'customer' });

        // Dummy / Aggregated values (Aapke Order/Product models judne par real count aayega)
        const dashboardData = {
            totalRevenue: 145700,
            totalOrders: 28,
            pendingOrders: 5,
            totalUsers: totalUsers,
            totalProducts: 12,
            recentOrders: [
                { id: "ORD-9821", customer: "Pooja Sharma", amount: 14570, status: "Delivered", date: "2026-10-04" },
                { id: "ORD-9820", customer: "Rahul Verma", amount: 3990, status: "Processing", date: "2026-10-05" },
                { id: "ORD-9819", customer: "Aarti Mehra", amount: 7320, status: "Shipped", date: "2026-10-05" }
            ]
        };

        return res.status(200).json({
            success: true,
            data: dashboardData,
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
});

module.exports = router;