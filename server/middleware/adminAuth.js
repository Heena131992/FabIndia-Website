// server/middleware/adminAuth.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const adminAuth = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ success: false, message: 'Access Denied: Token missing!' });
        }

        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret123');

        // Database me user check karein
        const user = await User.findById(decoded.id);

        if (!user || user.role !== 'admin') {
            return res.status(403).json({ success: false, message: 'Forbidden: Sirf Admin access kar sakta hai!' });
        }

        req.admin = user;
        next();
    } catch (error) {
        return res.status(401).json({ success: false, message: 'Invalid ya Expired Token!' });
    }
};

module.exports = adminAuth;