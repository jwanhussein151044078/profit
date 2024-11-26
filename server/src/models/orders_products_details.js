'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders_products_details extends Model {
    static associate(models) {
      this.belongsTo(models.orders  , {foreignKey:"order_id"                   , as : "order"});
      this.belongsTo(models.products, {foreignKey:"product_id"                 , as : "product"});
      this.hasMany(models.stock_logs, {foreignKey:"orders_products_details_id" , as : "stockLogs"})
      this.hasMany(models.attributes, {foreignKey:"orders_products_details_id" , as : "attributes"})
    }
  }
  orders_products_details.init({
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.DECIMAL(15,4),
      allowNull: false,
    },
    vat_rate: {
      type: DataTypes.DECIMAL(15,4),
      allowNull: false,
    },
    recipe_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    unit_price: {
      type: DataTypes.DECIMAL(15,4),
      allowNull: false,
    },
    total_price: {
      type: DataTypes.DECIMAL(15,4),
      allowNull: false,
    },
    delivery_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    discount_rate: {
      type: DataTypes.DECIMAL(7,4),
      allowNull: false,
    },
    vat_witholding_rate: {
      type: DataTypes.DECIMAL(7,4),
      allowNull: false,
    }
  }, {
    sequelize,
    modelName  : 'orders_products_details',
    tableName  : 'orders_products_details',
    timestamps : false,
  });
  return orders_products_details;
};