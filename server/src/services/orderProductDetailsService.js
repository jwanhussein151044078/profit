const {orders_products_details, stock_logs, attributes} = require("../models");

const createOrderProductDetail=( data,orderId,productId,transaction)=>{
  const orderProductDetailData = {
    order_id             : orderId,
    product_id           : productId,
    quantity             : data.quantity,
    vat_rate             : data.vat_rate,
    recipe_id            : data.recipe_id,
    unit_price           : data.unit_price,
    total_price          : data.total_price,
    delivery_date        : data.delivery_date,
    discount_rate        : data.discount_rate,
    vat_witholding_rate  : data.vat_witholding_rate
  }
  return orders_products_details.create(orderProductDetailData,{transaction });
}

const createStockLogs=(data,ordersProductsDetailsId,transaction)=>{
  return stock_logs.create({
    orders_products_details_id : ordersProductsDetailsId,
    waybill        : data.waybill,
    stock_cost     : data.stock_cost,
    credit_cost    : data.credit_cost,
    primary_rate   : data.primary_rate,
    shipment_cost  : data.shipment_cost,
    secondary_rate : data.secondary_rate,
    stock_quantity : data.stock_quantity
  },{transaction });
}

const createAttribute=(data,ordersProductsDetailsId,transaction)=>{
  return attributes.create({
    ...data,
    orders_products_details_id : ordersProductsDetailsId
  },{transaction });
}
module.exports={
  createOrderProductDetail,
  createStockLogs,
  createAttribute
}