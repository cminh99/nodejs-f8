const express = require('express');
const router = express.Router();

const controller = require('../controllers/course.controller');

router.get('/create', controller.create);
router.get('/:slug', controller.view);

router.post('/store', controller.store);

module.exports = router;
