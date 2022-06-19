'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Item.init({
    barang: DataTypes.STRING,
    harga: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Item',
  });
  Item.associate = function(models) {
    Item.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user'
    });}

  Item.associate = function(models) {
    Item.belongsToMany(models.Order, {
      through: 'OrderItem',
      as: 'order',
      foreignKey: 'itemId'
    });
  }
    return Item;
};
