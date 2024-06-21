# Course-Registration-System
Course Registration System
Project Overview
The Course Registration System is a web application designed to manage course registrations for students. It includes functionalities for user authentication, course management, and machine learning integrations for chatbots, predictive analytics, and recommendation systems.

Folder Structure
Backend
  Controller/
      courseController.js
		  userController.js
  middleware/
		auth.js
  ml/
		chatbot.js
		predictive.js
		recommender.js
  models/
		Course.js
		Registration.js
		User.js
	routes/
		courses.js
		ml.js
		users.js
	index.js
	package.json




Setup Instructions
Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB (v4 or higher)

Installation
1. Clone the repository:
   git clone <repository_url>
   cd Backend
2. Install dependencies:
   npm install
3. Start the application:
   npm start

The application will be running at `http://localhost:3045`.

Project Modules
 Controllers
- courseController.js: Handles course-related operations such as creating, updating, and deleting courses.
- userController.js: Manages user-related operations including registration, login, and profile management.
Middleware
- auth.js: Contains authentication middleware to protect routes and ensure that only authenticated users can access certain endpoints.
Machine Learning
- chatbot.js: Implements a chatbot functionality for user interaction and support.
- predictive.js: Provides predictive analytics to forecast course enrollments and trends.
- recommender.js: Offers a recommendation system to suggest courses to students based on their interests and past enrollments.

Models
- Course.js: Defines the schema and model for courses.
- Registration.js: Manages the schema for course registrations.
- User.js: Contains the schema for user information and authentication details.
 Routes
- courses.js: Contains API endpoints for course-related operations.
- ml.js: Provides endpoints for machine learning functionalities.
- users.js: Manages user-related API endpoints.

Usage
User Registration and Authentication:
  - Users can register and log in to the system.
  - Authentication is handled using JWT tokens.
Course Management:
  - Administrators can create, update, and delete courses.
  - Users can view available courses and register for them.
Machine Learning:
  - The chatbot assists users with their queries.
  - Predictive analytics helps in understanding enrollment patterns.
  - The recommender system suggests relevant courses to users.


