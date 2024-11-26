const {orders} = require("../models");

const createOrder=(orderData, transaction)=>{
  let order = {
    customer_id    : orderData.customer_id,
    order_status   : orderData.order_status,
    order_number   : orderData.order_number,
    order_date     : orderData.order_date,
    subtotal       : orderData.subtotal,
    total_with_tax : orderData.total_with_tax,
    primary_rate   : orderData.primary_rate,
    secondary_rate : orderData.secondary_rate,
    invoice_date   : orderData.invoice_date,
    invoice_number : orderData.invoice_number,
    payment_type   : orderData.payment_type,
    currency       : orderData.currency,
    notes          : orderData.notes
  }
  if(orderData.order_id){
    order.id = orderData.order_id;
  }
  return orders.create(order,{transaction });
}

module.exports={
  createOrder
}