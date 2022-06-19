'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      const Order= sequelize.define('Order', {
        jumlah: DataTypes.INTEGER,
    tipe: DataTypes.STRING
      },{});
    
    }
  }
  Order.init({
    jumlah: DataTypes.INTEGER,
    tipe: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
  });

  Order.associate = function(models) {
    Order.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user'
    })
  }

  Order.associate = function(models) {
    Order.belongsToMany(models.Item, {
      through: 'OrderItem',
      as: 'item',
      foreignKey: 'orderId'
    })
  }

  return Order;
};