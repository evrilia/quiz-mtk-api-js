const { quiz, kategori, quiz } = require('../models');

exports.index = async (req, res) => {
    try {
        const quiz = await quiz.findAll({
            include: [
                {
                    model: kategori,
                    as:'kategori'
                }
            ]
        });
        res.status(200).json({
            message:'successfully get quiz',
            quiz: quiz
        });
    } catch (error) {
        res.status.json({ error: error.message });
    }
};

exports.show = async (req, res) => {
    try {
        const { quizId } = req.params
        const quiz = await quiz.findOne({
            where: { id:quizId },
            include: [
                {
                    model: kategori,
                    as:'kategori'
                }
            ]
        });
        res.status(200).json({
            message:'successfully get quiz',
            quiz: quiz
        });
    } catch (error) {
        res.status.json({ error: error.message });
    }
};

exports.showKategori = async (req, res) => {
    try {
        const { quizId } = req.params
        const quiz = await quiz.findOne({
            where: { id:quizId },
            include: [
                {
                    model: kategori,
                    as:'kategori'
                }
            ]
        });
        res.status(200).json({
            message:'successfully get quiz',
            quiz: quiz
        });
    } catch (error) {
        res.status.json({ error: error.message });
    }
};


