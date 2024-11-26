'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('customers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
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
    },{schema:process.env.DB_SCHEMA});
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('customers',{schema:process.env.DB_SCHEMA});
  }
};