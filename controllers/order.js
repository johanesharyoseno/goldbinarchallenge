const Order = require('../models').Order;


module.exports = {
  list(req, res) {
    return Order
      .findAll({
        include: [],
        order: [
          ['createdAt', 'DESC'],
        ],
      })
      .then((order) => res.status(200).send(order))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Order
      .findOne(req.params.id, {
        include: [],
      })
      .then((order) => {
        if (!order) {
          return res.status(404).send({
            message: 'Order tidak ditemukan',
          });
        }
        return res.status(200).send(order);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    if (req.body.jumlah === null) {
      return res.status(400).send(
          { 
              error_code: "400",
              message: "isi jumlah"
          }
      )
  }
  if (req.body.tipe === null) {
    return res.status(400).send(
        { 
            error_code: "400",
            message: "isi tipe"
        }
    )
}
    return Order
      .create({
        jumlah: req.body.jumlah,
        tipe: req.body.tipe
      })
      .then((order) => res.status(201).send(order))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Order
      .findOne(req.params.id)      
      .then(order => {
        if (!order) {
          return res.status(404).send({
            message: 'Order tidak ditemukan',
          });
        }
        return project
          .update({
            jumlah: req.body.jumlah,
            tipe: req.body.tipe
          })
          .then(() => res.status(200).send(order))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Order
      .findOne(req.params.id)
      .then(order => {
        if (!order) {
          return res.status(400).send({
            message: 'Order tidak ditemukan',
          });
        }
        return order
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
}
