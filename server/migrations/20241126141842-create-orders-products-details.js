'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('orders_products_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'orders',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'products',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
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
    },{schema:process.env.DB_SCHEMA});
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('orders_products_details',{schema:process.env.DB_SCHEMA});
  }
};