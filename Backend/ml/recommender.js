const similarity = require('similarity');

// Sample data for the recommender system
const data = [
  { student_id: 1, course_id: 'math', rating: 5 },
  { student_id: 1, course_id: 'science', rating: 3 },
  { student_id: 2, course_id: 'math', rating: 4 },
  { student_id: 2, course_id: 'english', rating: 2 },
  { student_id: 3, course_id: 'science', rating: 5 },
  { student_id: 3, course_id: 'english', rating: 4 },
  { student_id: 4, course_id: 'math', rating: 4 },
  { student_id: 4, course_id: 'english', rating: 5 },
];

const recommendCourses = (studentId, numRecommendations = 2) => {
  const studentRatings = data.filter(d => d.student_id === studentId);
  const otherRatings = data.filter(d => d.student_id !== studentId);

  let similarities = [];
  otherRatings.forEach(rating => {
    const similarStudentRatings = data.filter(d => d.student_id === rating.student_id && d.course_id !== rating.course_id);
    if (similarStudentRatings.length > 0) {
      const similarityScore = similarity(JSON.stringify(studentRatings), JSON.stringify(similarStudentRatings));
      similarities.push({ student_id: rating.student_id, similarity: similarityScore });
    }
  });

  similarities.sort((a, b) => b.similarity - a.similarity);

  const topSimilarStudents = similarities.slice(0, numRecommendations).map(s => s.student_id);
  const recommendations = data.filter(d => topSimilarStudents.includes(d.student_id) && !studentRatings.some(sr => sr.course_id === d.course_id));

  return [...new Set(recommendations.map(r => r.course_id))];
};

module.exports = {
  recommendCourses,
};
