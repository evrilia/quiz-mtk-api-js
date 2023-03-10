const quiz = require('./quiz');
const materi = require('./materi');
const jawab = require('./quizJawab');
const express = require('express');
const router = express.Router();

router.use('/quiz', quiz);
router.use('/materi', materi);
router.use('/jawab', jawab);

module.exports = router;