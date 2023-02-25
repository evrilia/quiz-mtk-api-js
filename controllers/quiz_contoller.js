const { quiz, kategori } = require('../models');

exports.index = async (req, res) => {
    try {
        const quizes = await quiz.findAll({
            include: [
                {
                    model: kategori,
                    as: 'kategori'
                }
            ]
        });
        res.status(200).json({
            message: 'successfully get quiz',
            quiz: quizes.map(quiz => {
                return {
                    id: quiz.id,
                    soal: quiz.soal,
                    jawab: quiz.jawab,
                    a: quiz.a,
                    b: quiz.b,
                    c: quiz.c,
                    d: quiz.d,
                    kategori: quiz.kategori
                }
            })
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log(error);
    }
};

exports.show = async (req, res) => {
    try {
        const { quizId } = req.params
        const quizes = await quiz.findOne({
            where: { id: quizId },
            include: [
                {
                    model: kategori,
                    as: 'kategori'
                }
            ]
        });
        if (quizes === null) {
            res.status(404).json({
                message: 'quiz not found'
            });
        } else {
            res.status(200).json({
                message: 'successfully get quiz',
                quiz: quizes
            });
        };
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log(error);
    }
};

exports.showKategori = async (req, res) => {
    try {
        const { kategoriId } = req.params
        const quizes = await quiz.findAll({
            where: { kategoriId: kategoriId },
            include: [
                {
                    model: kategori,
                    as: 'kategori'
                }
            ]
        });
        if (kategoriId === null) {
            res.status(404).json({
                message: 'quiz not found'
            });
        } else {
            res.status(200).json({
                message: 'successfully get quiz',
                quiz: quizes
            });
        };
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log(error);
    }
};

exports.store = async (req, res) => {
    try {
        const quizes = await quiz.create(req.body);
        if (quizes) {
            res.status(201).json({
                message: 'successfully create quiz',
                quiz: quizes
            });
        } else {
            res.status(400).json({
                message: 'failed create quiz'
            });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.update = async (req, res) => {
    try {
        const { quizId } = req.params;
        const [updated] = await quiz.update(req.body, {
            where: { id: quizId }
        });
        if (updated) {
            const updatedQuiz = await quiz.findOne({ where: { id: quizId } });
            res.status(200).json({ quiz: updatedQuiz });
        } else {
            throw new Error('quiz not found');
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.destroy = async (req, res) => {
    const { quizId } = req.params;
    const deleted = await quiz.destroy({
        where: { id: quizId }
    });
    try{
        if (deleted) {
            res.status(200).json({ message: 'quiz deleted' });
        } else {
            res.status(404).json({ message: 'quiz not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};