'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class attributes extends Model {
    static associate(models) {
      this.belongsTo(models.orders_products_details, {foreignKey:"orders_products_details_id", as:"orderDetail"});
    }
  }
  attributes.init({
    orders_products_details_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    attribute_name: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    attribute_value: {
      type: DataTypes.STRING(32),
      allowNull: false,
    }
  }, {
    sequelize,
    modelName  : 'attributes',
    tableName  : 'attributes',
    timestamps : false,
  });
  return attributes;
};