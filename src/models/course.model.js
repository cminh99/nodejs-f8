const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

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

// Add plugins
mongoose.plugin(slug);
CourseSchema.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: 'all'
});

module.exports = mongoose.model('Course', CourseSchema);
