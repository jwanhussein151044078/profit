'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      customer_id : {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'customers',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
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
        defaultValue: DataTypes.fn('now')
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
    },{schema:process.env.DB_SCHEMA});
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('orders',{schema:process.env.DB_SCHEMA});
  }
};