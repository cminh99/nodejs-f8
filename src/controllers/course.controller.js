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
      .then(() => res.redirect('/me/stored/courses'))
      .catch(next);
  }

  // [GET] /courses/edit/:id
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) =>
        res.render('courses/edit', {
          course: singleDocument(course)
        })
      )
      .catch(next);
  }

  // [PUT] /courses/update/:id
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect('/me/stored/courses'))
      .catch(next);
  }

  // [DELETE] /courses/delete/:id
  delete(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }

  // [DELETE] /courses/delete/force/:id
  forceDelete(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }

  // [PATCH] /courses/restore/:id
  restore(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }

  // [POST] /courses/handle-form-actions
  handleStoredFormActions(req, res, next) {
    const body = { ...req.body };
    switch (body.action) {
      case 'delete':
        Course.delete({ _id: { $in: body.courseIDs } })
          .then(() => res.redirect('back'))
          .catch(next);
        break;

      default:
        break;
    }
  }
}

module.exports = new CourseController();
