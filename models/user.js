'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    nama: DataTypes.STRING,
    tanggalLahir: DataTypes.DATE,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    orderId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  User.associate = function(models) {
    User.hasMany(models.Item, {as: 'item'});
};
return User;
};