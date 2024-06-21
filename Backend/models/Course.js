const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  prerequisites: {type: String },
  capacity: { type: Number, required: true },
  enrolled: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

// Method to check if the course is full
courseSchema.methods.isFull = function() {
  return this.enrolled.length >= this.capacity;
};

module.exports = mongoose.model('Course', courseSchema);
