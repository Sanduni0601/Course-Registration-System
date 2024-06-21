const Course = require('../models/Course');
const User = require('../models/User');

const createCourse = async (req, res) => {
  try {
    const { name, description, prerequisites, capacity } = req.body;

    const course = new Course({
      name,
      description,
      prerequisites,
      capacity,
      enrolled: [],
    });

    await course.save();
    res.status(201).json({ message: 'Course created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate('prerequisites', 'name').populate('enrolled', 'name');
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate('prerequisites', 'name').populate('enrolled', 'name');
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const updateCourse = async (req, res) => {
  try {
    const { name, description, prerequisites, capacity } = req.body;

    const course = await Course.findByIdAndUpdate(
      req.params.id,
      { name, description, prerequisites, capacity },
      { new: true }
    );

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.status(200).json({ message: 'Course updated successfully', course });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.status(200).json({ message: 'Course deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};




// courseController.js in controller folder
const getEnrolledStudents = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate('enrolled', 'name email');
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.status(200).json(course.enrolled);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};


module.exports = {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
  getEnrolledStudents
};



