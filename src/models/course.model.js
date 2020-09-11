const slug = require('mongoose-slug-generator');
const mongoose = require('mongoose');

mongoose.plugin(slug);

const CourseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    videoId: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      slug: 'name',
      unique: true
    },
    thumbnail: {
      type: String,
      require: true
    },
    level: { type: String }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Course', CourseSchema);
