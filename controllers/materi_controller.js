const { materi, kategori } = require('../models');

exports.index = async (req, res) => {
    const materis = await materi.findAll({
        include: [
            {
                model: kategori,
                as: 'kategori',
                attributes: ['nama']
            }
        ]
    });
    if (materis.length > 0) {
        res.status(200).json({
            message: 'Success',
            data: materis.map(materi => {
                return {
                    id: materi.id,
                    judul: materi.judul,
                    materi: materi.materi,
                    kategori: materi.kategori.nama
                };
            })
        });
    } else {
        res.status(404).json({
            message: 'Data not found'
        });
    }
};

exports.indexByCategory = async (req, res) => {
    const { kategoriId } = req.params;
    const materis = await materi.findAll({
        where: { kategoriId },
        include: [
            {
                model: kategori,
                as: 'kategori',
                attributes: ['nama']
            }
        ]
    });
    if (materis.length > 0) {
        res.status(200).json({
            message: 'Success',
            data: materis.map(materi => {
                return {
                    id: materi.id,
                    judul: materi.judul,
                    materi: materi.materi,
                    kategori: materi.kategori.nama
                };
            })
        });
    } else {
        res.status(404).json({
            message: 'Data not found'
        });
    }
};

exports.show = async (req, res) => {
    const { materiId } = req.params;
    const materis = await materi.findOne({
        where: { id: materiId },
        include: [
            {
                model: kategori,
                as: 'kategori',
                attributes: ['nama']
            }
        ]
    });
    if (materis === null) {
        res.status(404).json({
            message: 'Data not found',
            data: materis
        });
    } else {
        res.status(200).json({
            message: 'Success',
            data: materis
        });
        
    }
};

exports.store = async (req, res) => {
    try{
        const materis = await materi.create(req.body, {
            fields: ['judul', 'materi', 'kategoriId']
        });
        res.status(201).json({
            message: 'Success',
            data: materis
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

exports.update = async (req, res) => {
    const { materiId } = req.params;
    const {update} = await materi.update(req.body, {
        where: { id: materiId }
    });
    const materis = await materi.findOne({
        where: { id: materiId }
    });
    if (materis) {
        res.status(200).json({
            message: 'Success',
            data: materis
        });
    } else {
        res.status(404).json({
            message: 'Data not found'
        });
    }
};

exports.destroy = async (req, res) => {
    const { materiId } = req.params;
    const materis = await materi.findOne({
        where: { id: materiId }
    });
    if (materis) {
        await materis.destroy();
        res.status(200).json({
            message: 'Success'
        });
    } else {
        res.status(404).json({
            message: 'Data not found'
        });
    }
};