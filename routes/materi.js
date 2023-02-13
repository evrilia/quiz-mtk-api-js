const materi = require('../controllers/materi_controller');
const express = require('express');
const router = express.Router();

router.get('/', materi.index);
router.get('/kategori/:kategoriId', materi.indexByCategory);
router.get('/:materiId', materi.show);
router.post('/', materi.store);
router.put('/:materiId', materi.update);
router.delete('/:materiId', materi.destroy);

module.exports = router;