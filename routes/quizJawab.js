const express = require('express');
const router = express.Router();
const jawab = require('../controllers/quizJawab_controller');

router.post('/', jawab.jawab);
router.post('/many', jawab.many);

module.exports = router;