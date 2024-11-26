'use strict';
const fs = require('fs');
const path = require('path');
const { findOrCreateCustomer } = require('../src/services/customersService');
const { createOrder } = require('../src/services/orderService');
const { findOrCreateProduct } = require('../src/services/productsService');
const { createOrderProductDetail, createStockLogs, createAttribute } = require('../src/services/orderProductDetailsService');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    try{
      const dataPath = path.join(__dirname, 'orders.json');
      const rawData = fs.readFileSync(dataPath, 'utf8');
      const ordersData = JSON.parse(rawData)?.orders;
      
      return queryInterface.sequelize.transaction(async t => {
        for (const order of ordersData){
          const customer = {...JSON.parse(order.customer),id:order.customer_id};
          const products = JSON.parse(order.products)
          const customerRes = await findOrCreateCustomer(customer,t);
          const orderRes    = await createOrder(order,t);
          for(const product of products){
            const productsRes = await findOrCreateProduct(product,t);
            const orderProductDetailsRes = await createOrderProductDetail(product,orderRes.id,productsRes[0].id,t);
            for(const stocklog of product.stocklogs){
              await createStockLogs(stocklog,orderProductDetailsRes.id,t);
            }
            for (const key in product.attributes){
              await createAttribute({
                attribute_name             : key ,
                attribute_value            : product.attributes[key]
              },orderProductDetailsRes.id,t);
            }
          }
        }
      });
    }catch(e){
      console.log("Seeder Error :", e );
    }finally{

    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete({schema:process.env.DB_SCHEMA,tableName:'attributes'}, null, {});
    await queryInterface.bulkDelete({schema:process.env.DB_SCHEMA,tableName:'stock_logs'}, null, {});
    await queryInterface.bulkDelete({schema:process.env.DB_SCHEMA,tableName:'orders_products_details'}, null, {});
    await queryInterface.bulkDelete({schema:process.env.DB_SCHEMA,tableName:'orders'}, null, {});
    await queryInterface.bulkDelete({schema:process.env.DB_SCHEMA,tableName:'products'}, null, {});
    await queryInterface.bulkDelete({schema:process.env.DB_SCHEMA,tableName:'customers'}, null, {});
  }
};
