const Course = require('../models/course.model');
const { multipleDocuments } = require('../utils/mongoose');

class MeController {
  // [GET] /me/stored/courses
  storedCourses(req, res, next) {
    Course.find({})
      .then((courses) =>
        res.render('me/courses', {
          courses: multipleDocuments(courses)
        })
      )
      .catch(next);
  }
}

module.exports = new MeController();
