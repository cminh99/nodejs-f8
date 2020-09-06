const express = require('express');
const router = express.Router();

const controller = require('../controllers/news/news.controller');

router.get('/', controller.index);

module.exports = router;
