const Order = require('../models').Order;
const User = require('../models').User;

module.exports = {
    list(req, res) {
        return User.findAll({
            include: [],
            order: [['createdAt', 'DESC']]
        })
        .then((user) => res.status(200).send(user))
        .catch((error) => {
            res.status(400).send(error);
        });
    },

    getByUsername(req, res) {
        return User.findOne(req.params.username, {
            include: []
        })
        .then((user) => {
            if (!user) {
                return res.status(404).send({
                    message: 'User Not Found, silakan registrasi'
                })
            }
            return res.status(200).send(user);
        })
        .catch((error) => {
            res.status(400).send(error);
        });
    },

    add(req, res) {
        if (req.body.nama === null) {
            return res.status(400).send(
                { 
                    error_code: "400",
                    message: "isi nama"
                }
            )
        }

        if (req.body.tanggalLahir=== null) {
            return res.status(400).send(
                { 
                    error_code: "400",
                    message: "isi tanggal lahir"
                }
            )
        }
        if (req.body.username=== null) {
            return res.status(400).send(
                { 
                    error_code: "400",
                    message: "isi username"
                }
            )
        }
        if (req.body.email=== null) {
            return res.status(400).send(
                { 
                    error_code: "400",
                    message: "isi email"
                }
            )
        }
        if (req.body.password=== null) {
            return res.status(400).send(
                { 
                    error_code: "400",
                    message: "isi password"
                }
            )
        }
        if (req.body.orderId=== null) {
            return res.status(400).send(
                { 
                    error_code: "400",
                    message: "isi order id"
                }
            )
        }

        return User.create({
            nama: req.body.nama,
            tanggalLahir: req.body.tanggalLahir,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            orderId: req.body.orderId,
        })
        .then((user) => res.status(201).send(user))
        .catch((error) => {
            res.status(400).send(error);
        });
    },
}