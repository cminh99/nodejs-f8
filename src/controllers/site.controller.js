const Course = require('../models/course.model');
const { multipleDocuments } = require('../utils/mongoose');

class SiteController {
  // [GET] /
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render('home', {
          courses: multipleDocuments(courses)
        });
      })
      .catch(next);
  }
}

module.exports = new SiteController();
