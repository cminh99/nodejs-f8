const express = require('express');
const router = express.Router();

const controller = require('../controllers/course.controller');

router.get('/:slug', controller.detailCourse);

module.exports = router;
