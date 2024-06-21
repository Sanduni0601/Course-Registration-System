const { PolynomialRegression } = require('ml-regression');


const data = {
  semesters: [1, 2, 3, 4, 5, 6, 7, 8],
  enrollments: [30, 40, 35, 50, 45, 60, 55, 70],
};

const regression = new PolynomialRegression(data.semesters, data.enrollments, 2);

const predictEnrollment = (futureSemester) => {
  return regression.predict(futureSemester);
};

module.exports = {
  predictEnrollment,
};
