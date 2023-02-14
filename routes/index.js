const quiz = require('./quiz');
const materi = require('./materi');
const express = require('express');
const router = express.Router();

router.use('/quiz', quiz);
router.use('/materi', materi);

module.exports = router;