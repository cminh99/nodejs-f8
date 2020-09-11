const express = require('express');
const router = express.Router();

const controller = require('../controllers/me.controller');

router.get('/stored/courses', controller.storedCourses);

module.exports = router;
