const express = require('express');
const { getUsers, createUser, updateUserRole, deleteUser } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');

const router = express.Router();

router.get('/', authMiddleware, getUsers);
router.post('/', createUser);
router.put('/:id/role', authMiddleware, adminMiddleware, updateUserRole);
router.delete('/:id', authMiddleware, deleteUser);

module.exports = router;
