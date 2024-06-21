const User = require('../models/User');
const bcrypt = require('bcrypt');
const Course = require('../models/Course');

const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      role,
    });

    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    req.session.user = { userId: user._id, role: user.role };

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to logout' });
    }
    res.status(200).json({ message: 'Logout successful' });
  });
};

const registerForCourse = async (req, res) => {
  try {
    const { courseId, fullName, nicNumber, contactNumber, address, birthday } = req.body;
    const userId = req.session.user.userId;

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    if (course.isFull()) {
      return res.status(400).json({ message: 'Course is full' });
    }

    if (course.enrolled.includes(userId)) {
      return res.status(400).json({ message: 'User already enrolled in this course' });
    }

    // Update the user's details
    await User.findByIdAndUpdate(userId, { fullName, nicNumber, contactNumber, address, birthday });

    // Add the user to the course's enrolled list
    course.enrolled.push(userId);
    await course.save();

    res.status(200).json({ message: 'Successfully registered for the course' });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: 'Server error' });
  }
};

const getAvailableCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    const availableCourses = courses.filter(course => !course.isFull());

    res.status(200).json(availableCourses);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  register,
  login,
  logout,
  registerForCourse,
  getAvailableCourses
};

