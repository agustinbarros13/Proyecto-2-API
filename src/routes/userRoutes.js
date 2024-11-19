const express = require('express');
const { deleteUser, updateUserRole } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');

const router = express.Router();

router.delete('/:id', authMiddleware, deleteUser);

router.put('/:id/role', authMiddleware, adminMiddleware, updateUserRole);
module.exports = router;
