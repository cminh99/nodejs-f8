const express = require('express');
const router = express.Router();

const controller = require('../controllers/me.controller');

router.get('/stored/courses', controller.storedCourses);
router.get('/trash/courses', controller.trashCourses);

module.exports = router;
