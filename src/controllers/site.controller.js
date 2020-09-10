const Course = require('../models/course.model');

class SiteController {
  // [GET] /
  index(req, res) {
    Course.find({}, function (err, courses) {
      if (!err) {
        res.json(courses);
        return;
      }

      res.status(400).json({ error: 'ERROR!' });
    });
  }
}

module.exports = new SiteController();
