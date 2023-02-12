const quiz = require('../controllers/quiz_contoller');
const express = require('express');
const router = express.Router();

router.get('/', quiz.index);
router.get('/:quizId', quiz.show);
router.get('/kategori/:kategoriId', quiz.showKategori);
router.post('/', quiz.store);
router.put('/:quizId', quiz.update);
router.delete('/:quizId', quiz.destroy);

module.exports = router;