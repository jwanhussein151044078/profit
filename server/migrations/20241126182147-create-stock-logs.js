'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('stock_logs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      orders_products_details_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'orders_products_details',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
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
    },{schema:process.env.DB_SCHEMA});
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('stock_logs',{schema:process.env.DB_SCHEMA});
  }
};