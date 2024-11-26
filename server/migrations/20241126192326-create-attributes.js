'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('attributes', {
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
      attribute_name: {
        type: DataTypes.STRING(32),
        allowNull: false,
      },
      attribute_value: {
        type: DataTypes.STRING(32),
        allowNull: false,
      }
    },{schema:process.env.DB_SCHEMA});
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('attributes',{schema:process.env.DB_SCHEMA});
  }
};