const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  name: { type: String },
  description: { type: String },
  thumbnail: {
    type: String,
    default:
      'https://shareprogramming.net/wp-content/uploads/2019/11/Screen-Shot-2019-11-14-at-9.47.06-PM.png'
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Course', CourseSchema);
