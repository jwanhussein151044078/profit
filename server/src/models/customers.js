'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class customers extends Model {
    static associate(models) {
      this.hasMany(models.orders,{foreignKey:'customer_id',as :'orders'});
    }
  }
  customers.init({
    company_name:{
      type: DataTypes.STRING(256),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(32),
      allowNull: false,
    }
  }, {
    sequelize,
    modelName  : 'customers',
    tableName  : 'customers',
    timestamps : false,
  });
  return customers;
};