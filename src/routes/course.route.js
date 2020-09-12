const express = require('express');
const router = express.Router();

const controller = require('../controllers/course.controller');

router.get('/create', controller.create);
router.post('/store', controller.store);

router.get('/edit/:id', controller.edit);
router.put('/update/:id', controller.update);

router.patch('/restore/:id', controller.restore);

router.delete('/delete/:id', controller.delete);
router.delete('/delete/force/:id', controller.forceDelete);

router.get('/:slug', controller.view);

module.exports = router;
