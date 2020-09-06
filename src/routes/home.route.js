const express = require('express');
const router = express.Router();

const controller = require('../controllers/home/home.controller');

router.get('/', controller.index);

module.exports = router;
