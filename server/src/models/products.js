'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    static associate(models) {
      
    }
  }
  products.init({
    product_name :{
      type: DataTypes.STRING(256),
      allowNull: false,
    },
    product_unit :{
      type: DataTypes.STRING(16),
      allowNull: false,
    },
    unit_price :{
      type: DataTypes.DECIMAL(15,4),
      allowNull: false,
    },
    vat_rate : {
      type: DataTypes.DECIMAL(15,4),
      allowNull: false,
    },
    discount_rate : {
      type: DataTypes.DECIMAL(7,4),
      allowNull: false,
    }
  }, {
    sequelize,
    modelName  : 'products',
    tableName  : 'products',
    timestamps : false,
  });
  return products;
};