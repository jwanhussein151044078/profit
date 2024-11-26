'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class stock_logs extends Model {
    static associate(models) {
      this.belongsTo(models.orders_products_details, {foreignKey:"orders_products_details_id", as:"orderDetail"});
    }
  }
  stock_logs.init({
    orders_products_details_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    waybill: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    stock_cost: {
      type: DataTypes.DECIMAL(15,4),
      allowNull: false,
    },
    credit_cost:{
      type: DataTypes.DECIMAL(15,4),
      allowNull: true,
    },
    primary_rate:{
      type: DataTypes.DECIMAL(15,8),
      allowNull: false,
    },
    shipment_cost:{
      type: DataTypes.DECIMAL(15,4),
      allowNull: false,
    },
    secondary_rate:{
      type: DataTypes.DECIMAL(15,8),
      allowNull: false,
    },
    stock_quantity:{
      type: DataTypes.DECIMAL(15,4),
      allowNull: false,
    }
  }, {
    sequelize,
    modelName  : 'stock_logs',
    tableName  : 'stock_logs',
    timestamps : false,
  });
  return stock_logs;
};