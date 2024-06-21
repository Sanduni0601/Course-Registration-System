const express = require('express');
const { recommendCourses } = require('../ml/recommender');
const { adapter, bot } = require('../ml/chatbot');

const router = express.Router();

router.get('/recommend', (req, res) => {
  const studentId = parseInt(req.query.student_id);
  const recommendations = recommendCourses(studentId);
  res.json(recommendations);
});

/*const { adapter, bot } = require('../ml/chatbot');

router.post('/chat', (req, res) => {
  adapter.processActivity(req, res, bot);
});
*/

router.post('/chatbot', (req, res) => {
    adapter.processActivity(req, res, async (context) => {
      await bot(context);
    });
  });

const { predictEnrollment } = require('../ml/predictive');

router.get('/predict', (req, res) => {
  const futureSemester = parseInt(req.query.semester);
  const prediction = predictEnrollment(futureSemester);
  res.json({ predictedEnrollment: prediction });
});

module.exports = router;
