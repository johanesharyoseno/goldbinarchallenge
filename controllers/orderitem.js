const OrderItem = require('../models').OrderItem;

module.exports = {
    list(req, res) {
        return OrderItem
            .findAll({
                include: [],
                order: [
                    ['createdAt', 'DESC'],
                ],
            })
            .then((orderItem) => res.status(200).send(orderItem))
            .catch((error) => { res.status(400).send(error); });
    },

    getById(req, res) {
        return OrderItem
            .findOne(req.params.id, {
                include: [],
            })
            .then((orderItem) => {
                if (!orderItem) {
                    return res.status(404).send({
                        message: 'Order Item Not Found',
                    });
                }
                return res.status(200).send(orderItem);
            })
            .catch((error) => res.status(400).send(error));
    },
}