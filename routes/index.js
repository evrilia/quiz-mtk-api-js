const quiz = require('./quiz');
const express = require('express');
const router = express.Router();

router.use('/quiz', quiz);

module.exports = router;