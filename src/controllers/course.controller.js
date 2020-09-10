const Course = require('../models/course.model');
const { singleDocument } = require('../utils/mongoose');

class CourseController {
  // [GET] /courses/:slug
  detailCourse(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render('courses/detail_course', { course: singleDocument(course) });
      })
      .catch(next);
  }
}

module.exports = new CourseController();
