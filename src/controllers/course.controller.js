const Course = require('../models/course.model');
const { singleDocument } = require('../utils/mongoose');

class CourseController {
  // [GET] /courses/:slug
  view(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render('courses/view', { course: singleDocument(course) });
      })
      .catch(next);
  }

  // [GET] /courses/create
  create(req, res, next) {
    res.render('courses/create');
  }

  // [POST] /courses/store
  store(req, res, next) {
    const formData = { ...req.body };
    formData.thumbnail = `https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`;
    const course = new Course(formData);
    course
      .save()
      .then(() => res.redirect('/'))
      .catch(next);
  }
}

module.exports = new CourseController();
