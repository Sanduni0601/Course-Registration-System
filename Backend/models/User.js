const express = require('express');
const router = express.Router();
const UserController = require('../controller/userController');
const { authenticateUser } = require('../middleware/auth');

// Routes accessible to both students and admin
router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.post('/logout', UserController.logout);

router.post('/register-course', authenticateUser, UserController.registerForCourse);

module.exports = router;
