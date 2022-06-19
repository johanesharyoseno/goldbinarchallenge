const Item = require('../models').Item;


module.exports = {
    list(req, res) {
        return Item.findAll({
            include: [],
            order: [['createdAt', 'DESC']]
        })
        .then((item) => res.status(200).send(item))
        .catch((error) => {
            res.status(400).send(error);
        });
    },

    getByBarang(req, res) {
        return Item.findOne(req.params.barang, {
            include: []
        })
        .then((item) => {
            if (!item) {
                return res.status(404).send({
                    message: 'Barang tidak tersedia'
                })
            }
            return res.status(200).send(item);
        })
        .catch((error) => {
            res.status(400).send(error);
        });
    },
}