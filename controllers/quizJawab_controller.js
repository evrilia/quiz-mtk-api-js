const { quiz } = require('../models')

exports.jawab = async (req, res) => {
    const { id, jawab } = req.body
    const quizs = await quiz.findOne({
        where: { id: id }
    });

    try {
        if (quizs){
            if (quizs.jawab === jawab) {
                res.status(200).json({
                    message: 'jawaban benar',
                    quiz: `quizId: ${id}, jawaban: ${quizs.jawab}`
                });
            } else {
                res.status(200).json({
                    message: 'jawaban salah',
                    jawaban: `quizId: ${id}, jawaban: ${quizs.jawab}`
                });
            }
        } else {
            res.status(404).json({
                message: 'quiz not found'
            });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log(error);
    }
}

exports.many = async (req, res) => {
    const { id, jawab } = req.body
    try {
        let benar = 0
        let salah = 0
        for (let i = 0; i < id.length; i++) {
            const quizs = await quiz.findOne({
                where: { id: id[i] }
            });
            if (quizs) {
                if (quizs.jawab === jawab[i]) {
                    benar++
                } else {
                    salah++
                }
            } 
        }
        res.status(200).json({
            message: 'jawaban benar',
            review: `quizId: ${id}, jawaban: ${jawab}`,
            Benar:` ${benar} dari ${id.length}`
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log(error);
    }
}
