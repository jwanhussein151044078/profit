'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    static associate(models) {
      this.belongsTo(models.customers,{foreignKey:'customer_id',as:'customer'});
      this.hasMany(models.orders_products_details,{foreignKey:"order_id",as:"details"});
    }
  }
  orders.init({
    customer_id : {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    order_status : {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    order_number : {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    order_date : {
      type: DataTypes.DATE,
      allowNull: false,
    },
    subtotal : {
      type: DataTypes.DECIMAL(15,4),
      allowNull: false,
    },
    total_with_tax : {
      type: DataTypes.DECIMAL(15,4),
      allowNull: false,
    },
    primary_rate:{
      type: DataTypes.DECIMAL(15,8),
      allowNull: false,
    },
    secondary_rate:{
      type: DataTypes.DECIMAL(15,8),
      allowNull: false,
    },
    invoice_date: {
      type: DataTypes.DATE,
      allowNull: false,
    //  defaultValue: Sequelize.fn('now')
    },
    invoice_number: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    payment_type: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    currency:{
      type: DataTypes.STRING(16),
      allowNull: false,
    },
    notes: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName  : 'orders',
    tableName  : 'orders',
    timestamps : false,
  });
  return orders;
};