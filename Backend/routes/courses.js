// courses.js in routes folder
const express = require('express');
const router = express.Router();
const CourseController = require('../controller/courseController');
const { authenticateUser, isAdmin } = require('../middleware/auth');


router.use(authenticateUser);


router.post('/', isAdmin, CourseController.createCourse);
router.get('/all', isAdmin, CourseController.getAllCourses);
router.get('/:id', isAdmin, CourseController.getCourseById);
router.put('/:id', isAdmin, CourseController.updateCourse);
router.delete('/:id', isAdmin, CourseController.deleteCourse);


module.exports = router;
