'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
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
        type: DataTypes.DECIMAL(3,4),
        allowNull: false,
      }
    },{schema:process.env.DB_SCHEMA});
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('products',{schema:process.env.DB_SCHEMA});
  }
};