'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OrderItem.init({
    orderId: DataTypes.INTEGER,
    itemId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OrderItem',
  });
OrderItem.associate = function (models) {
  OrderItem.belongsTo(models.Order, {foreignKey:'orderId'})
  OrderItem.belongsTo(models.Item, {foreignKey:'itemId'})
};

  return OrderItem;
};