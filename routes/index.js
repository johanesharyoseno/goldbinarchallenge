const express = require('express');
const router = express.Router();

const userController = require('../controllers').user;
const itemController = require('../controllers').item;
const orderController = require('../controllers').order;
const orderItemController = require('../controllers').orderItem;

router.use (function timeLog(req, res, next) {
  console.log (`Time: ${Date.now()}`)
  next()
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'tesgold' });
});

// User
router.get('/api/user', userController.list);
router.get('/api/login/:username', userController.getByUsername);
router.post('/api/register', userController.add);

// Item
router.get('/api/item', itemController.list);
router.get('/api/item/:id', itemController.getByBarang);


// Order
router.get('/api/order', orderController.list);
router.get('/api/order/:id', orderController.getById);
router.post('/api/order', orderController.add);
router.put('/api/order/:id', orderController.update);
router.delete('/api/order/:id', orderController.delete);

// OrderItem
router.get('/api/orderItem', orderItemController.list);
router.get('/api/orderItem/:id', orderItemController.getById);


module.exports = router; 
